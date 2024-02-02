<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartDetailResource;
use App\Models\CartDetail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CartDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cartDetailResource = CartDetailResource::collection(CartDetail::all());

        return $this->sentSuccessResource($cartDetailResource,Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        CartDetail::create($request->all());
        $cartDetailResource = CartDetailResource::collection(CartDetail::all());

        return $this->sentSuccessResource($cartDetailResource,Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cartDetails = CartDetail::where('cart_id',$id)->get();
        $cartDetailResource = CartDetailResource::collection($cartDetails);

        return $this->sentSuccessResource($cartDetailResource,Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        CartDetail::find($id)->update($request->all());
        $cartDetailResource = CartDetailResource::collection(CartDetail::all());

        return $this->sentSuccessResource($cartDetailResource,Response::HTTP_OK);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        CartDetail::find($id)->delete();
        $cartDetailResource = CartDetailResource::collection(CartDetail::all());

        return $this->sentSuccessResource($cartDetailResource,Response::HTTP_OK);

    }
}
