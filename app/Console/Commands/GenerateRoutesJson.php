<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\File;

class GenerateRoutesJson extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
//  protected $signature = 'command:name';
    protected $signature = 'route:json';

    // Router contains the collection of this apps routes
    protected $router;

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate json of all routes { name : path } /resources/js/routes.json';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Router $router)
    {
        parent::__construct();
        $this->router = $router;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $routes = [];
        foreach ($this->router->getRoutes() as $route) {
            $routes[$route->getName()] = $route->uri();
        }
        File::put('resources/js/routes.json', json_encode($routes, JSON_PRETTY_PRINT));
    }

}

























