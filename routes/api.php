<?php

use Illuminate\Http\Request;

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


//Route::get('/index', 'BrandController@index');
Route::get('/page', 'BrandController@page');

Route::post('/brand-save', 'BrandController@store');

Route::post('/brand-delete/{id}', 'BrandController@destroy');

Route::post('/brand-update/{id}', 'BrandController@update');

