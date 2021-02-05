<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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
/* POST METHOD FOR EVENT */
Route::get('/event', [App\Http\Controllers\EventsController::class, 'show']);
Route::post('/event', [App\Http\Controllers\EventsController::class, 'store']);
