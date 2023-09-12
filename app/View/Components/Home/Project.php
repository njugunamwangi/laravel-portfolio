<?php

namespace App\View\Components\Home;

use App\Http\Resources\ProjectResource;
use Closure;
use App\Models\Project as Projects;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\View\Component;
use Illuminate\Support\Arr;

class Project extends Component
{
    public array $items = [];
    public array $tabs = [];
    /**
     * Create a new component instance.
     */
    public function __construct(Request $request)
    {
        $projects = Projects::all()->where('active', true);

        $this->items = ProjectResource::collection($projects)->toArray($request);

        $this->tabs = array_unique(Arr::flatten(Arr::pluck($this->items, 'categoryTabs')));
        sort($this->tabs);
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.home.project');
    }
}
