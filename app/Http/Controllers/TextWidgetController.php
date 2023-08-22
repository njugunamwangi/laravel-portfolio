<?php

namespace App\Http\Controllers;

use App\Models\TextWidget;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTextWidgetRequest;
use App\Http\Requests\UpdateTextWidgetRequest;
use App\Http\Resources\TextWidgetResource;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;


class TextWidgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TextWidgetResource::collection(
            TextWidget::query()
                ->orderBy('created_by', 'desc')
                ->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTextWidgetRequest $request)
    {
        $data = $request->validated();

        if(isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $textWidget = TextWidget::create($data);

        return new TextWidgetResource($textWidget);
    }

    /**
     * Display the specified resource.
     */
    public function show(TextWidget $textWidget)
    {
        return new TextWidgetResource($textWidget);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTextWidgetRequest $request, TextWidget $textWidget)
    {
        $data = $request->validated();

        if(isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;

            if($textWidget->image) {
                $absolutePath = public_path($textWidget->image);
                File::delete($absolutePath);
            }
        }

        $textWidget->update($data);

        return new TextWidgetResource($textWidget);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TextWidget $textWidget)
    {
        $textWidget->delete();

        if ($textWidget->image) {
            $absolutePath = public_path($textWidget->image);
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

        $dir = 'textWidgets/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;

        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }

        file_put_contents($relativePath, $image);

        return $relativePath;
    }
}
