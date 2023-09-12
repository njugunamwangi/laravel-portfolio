<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\CategoryProject;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ProjectResource::collection(
            Project::query()
                ->orderBy('name', 'asc')
                ->paginate(12)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $data = $request->validated();

        if(isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $project = Project::create($data);

        foreach ($data['categories'] as $category) {
            $categoryData = ['category_id' => $category, 'project_id' => $project->id];
            $this->createCategoryProject($categoryData);
        }

        return new ProjectResource($project);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $data = $request->validated();

        if(isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;

            if($project->image) {
                $absolutePath = public_path($project->image);
                File::delete($absolutePath);
            }
        }

        $project->update($data);

        return new ProjectResource($project);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();

        if ($project->image) {
            $absolutePath = public_path($project->image);
            File::delete($absolutePath);
        }

        return response('', 204);
    }

    private function saveImage($image) {
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {

            $image = substr($image, strpos($image, ',') + 1);

            $type = strtolower($type[1]);

            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }

            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with the image data');
        }

        $dir = 'projects/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;

        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }

        file_put_contents($relativePath, $image);

        return $relativePath;
    }

    private function createCategoryProject($data) {
        // if (is_array($data['data'])) {
        //     $data['data'] = json_encode($data['data']);
        // }

        $validator = Validator::make($data, [
            'category_id' => 'exists:App\Models\Category,id',
            'project_id' => 'exists:App\Models\Project,id'
        ]);

        return CategoryProject::create($validator->validate());
    }
}
