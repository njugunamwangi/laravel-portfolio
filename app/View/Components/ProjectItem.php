<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ProjectItem extends Component
{
    /**
     * Create a new component instance.
     */
    public function __construct(public string $title, public array $categories, public string $image, public string $project_url)
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.project-item');
    }
}
