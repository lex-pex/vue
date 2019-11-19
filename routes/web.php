<?php
/*
|----------------------------------------------------------------------
| Web Routes
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
*/

Route::get('/', function () { return view('welcome'); })->name('welcome');

Route::get('/first/path/method/get', function () { /* to do */ })->name('first');

Route::post('/second/path/method/post', function () { /* to do */ })->name('second');

Route::get('/third/path/{param?}/get/method', function () { /* to do */ })->name('third');

Route::post('/fourth/path/{param?}/post/method', function () { /* to do */ })->name('fourth');

Route::post('/fifth/form/{parameter?}', function () { /* to do */ })->name('fifth');





