<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\FoodTypeResource;
use App\Models\Bill;
use App\Models\FoodType;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FoodTypeController extends Controller
{

   
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $foodTypes = FoodType::all();
        $foodTypeResource = FoodTypeResource::collection($foodTypes);

        return $this->sentSuccessResource($foodTypeResource,Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        FoodType::create($request->all());
        $foodTypes = FoodType::all();
        $foodTypeResource = FoodTypeResource::collection($foodTypes);

        return $this->sentSuccessResource($foodTypeResource,Response::HTTP_OK);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $foodType = FoodType::find($id);
        return  new FoodTypeResource($foodType);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        //
        $foodType = FoodType::find($id);
        return $foodType->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $foodType = FoodType::find($id);
        $foodType->delete();
        $foodTypeResource = FoodTypeResource::collection(FoodType::all());
        
        return $this->sentSuccessResource($foodTypeResource,Response::HTTP_OK);      
    }
}
