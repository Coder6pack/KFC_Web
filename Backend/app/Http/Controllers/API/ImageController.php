<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ImageResource;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $imageResource = ImageResource::collection(Image::all());

        return $this->sentSuccessResource($imageResource,Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Image::create($request->all());
        $imageResource = ImageResource::collection(Image::all());

        return $this->sentSuccessResource($imageResource,Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $image = Image::where('food_id',$id)->get();
        $imageResource = ImageResource::collection($image);

        return $this->sentSuccessResource($imageResource,Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Image::find($id)->update($request->all());
        $imageResource = ImageResource::collection(Image::all());

        return $this->sentSuccessResource($imageResource,Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Image::find($id)->delete();
        $imageResource = ImageResource::collection(Image::all());

        return $this->sentSuccessResource($imageResource,Response::HTTP_OK);
    }
}
