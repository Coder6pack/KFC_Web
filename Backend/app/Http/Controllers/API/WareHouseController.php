<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\WareHouseResource;
use App\Models\WareHouse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class WareHouseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $wareHouseResource = WareHouseResource::collection(WareHouse::all());

        return $this->sentSuccessResource($wareHouseResource,Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $wareHouse = WareHouse::create($request->all());

        return new WareHouseResource($wareHouse);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $wareHouse = WareHouse::where('food_id',$id)->get();
        $wareHouseResource = WareHouseResource::collection($wareHouse);

        return $this->sentSuccessResource($wareHouseResource,Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        WareHouse::find($id)->update($request->all());
        $wareHouse = WareHouse::find($id);
        
        return new WareHouseResource($wareHouse);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        WareHouse::find($id)->delete();
        $wareHouseResource = WareHouseResource::collection(WareHouse::all());

        return $this->sentSuccessResource($wareHouseResource,Response::HTTP_OK);
    }
}
