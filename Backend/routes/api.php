<?php

use App\Http\Controllers\API\BillController;
use App\Http\Controllers\API\BillDetailController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\CartDetailController;
use App\Http\Controllers\API\FoodTypeController;
use App\Http\Controllers\API\FoodController;
use App\Http\Controllers\API\ImageController;
use App\Http\Controllers\API\RelatedController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\WareHouseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('food_types',FoodTypeController::class);

Route::apiResource('food',FoodController::class);

Route::apiResource('user',UserController::class);

Route::apiResource('role',RoleController::class);

Route::apiResource('image',ImageController::class);

Route::apiResource('related',RelatedController::class);

Route::apiResource('bill',BillController::class);

Route::apiResource('bill_detail',BillDetailController::class);

Route::apiResource('ware_house',WareHouseController::class);

Route::apiResource('cart',CartController::class);

Route::apiResource('cart_detail',CartDetailController::class);