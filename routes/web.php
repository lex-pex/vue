<?php
/*
|----------------------------------------------------------------------
| Web Routes
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
*/

Route::get('/', function () { return view('welcome'); })->name('welcome');
// The Back-End to Front-end routing
Route::get('/front_routing', function () { return view('welcome'); })->name('front_routing');
// The VueJS scaffolding
Route::get('/localization', function () { return view('welcome'); })->name('localization');

Route::get('/first/path/method/get', function () { /* to do */ })->name('first');

Route::post('/second/path/method/post', function () { /* to do */ })->name('second');

Route::get('/third/path/{param?}/get/method', function () { /* to do */ })->name('third');

Route::post('/fourth/path/{param?}/post/method', function () { /* to do */ })->name('fourth');

Route::post('/fifth/form/{parameter?}', function () { /* to do */ })->name('fifth');

// The VueJS scaffolding
Route::get('/vue', function () { return view('vue.page'); })->name('vue');

// Articles the VueJS SPA
Route::get('/spa', function () { return view('articles.spa'); })->name('spa');



