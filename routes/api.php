<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// When authentication and its need for this route
// Route::middleware('auth:api')->resource('users', 'UserController');

Route::resource('users', 'UserController');

/*Route::resource('articles', 'ArticleController')->only([
    'index', 'show', 'create', 'store'
]);*/


// List Articles
Route::get('articles', 'ArticleController@index');

// List Single Article
Route::get('article/{id}', 'ArticleController@show');

// Create New Article
Route::post('article', 'ArticleController@store');

// Update Article
Route::put('article', 'ArticleController@store');

// Delete Article
Route::delete('article/{id}', 'ArticleController@destroy');






