<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CartResource;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cartResource = CartResource::collection(Cart::all());

        return  $this->sentSuccessResource($cartResource,Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Cart::create($request->all());
        $cartResource = CartResource::collection(Cart::all());

        return  $this->sentSuccessResource($cartResource,Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $cart = Cart::where('user_id',$id)->get();
        $cartResource = CartResource::collection($cart);

        return  $this->sentSuccessResource($cartResource,Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $cart = Cart::find($id);
        $cart->delete();
        $cartResource = CartResource::collection(Cart::all());

        return  $this->sentSuccessResource($cartResource,Response::HTTP_OK);
    }
}
