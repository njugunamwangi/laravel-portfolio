<?php

namespace App\View\Components\Home;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;
use Illuminate\Support\Arr;

class Project extends Component
{
    public array $items = [];
    public array $tabs = [];
    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        $this->items = [
            [
                'category' => ['PHP', 'Wordpress'],
                'title' => 'In2 Drones Technology Solutions',
                'image' => url('/img/projects/in2drones.png'),
                'project_url' => 'https://in2dronestechsolutions.com/'
            ],
            [
                'category' => ['PHP', 'Wordpress'],
                'title' => 'Travel with Lewis',
                'image' => url('/img/projects/travelwithlewis.png'),
                'project_url' => 'https://travelwithlewis.co.ke/'
            ],
            [
                'category' => ['PHP', 'Laravel'],
                'title' => 'Portfolio',
                'image' => url('/img/projects/portfolio.png'),
                'project_url' => 'http://localhost'
            ],
        ];

        $this->tabs = array_unique(Arr::flatten(Arr::pluck($this->items, 'category')));
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.home.project');
    }
}
