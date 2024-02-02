<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\RelatedResource;
use App\Models\Related;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RelatedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $relatedResource = RelatedResource::collection(Related::all());

        return $this->sentSuccessResource($relatedResource,Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Related::create($request->all());
        $relatedResource = RelatedResource::collection(Related::all());

        return $this->sentSuccessResource($relatedResource,Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $related = Related::where('images_id',$id)->get();
        $relatedResource = RelatedResource::collection($related);

        return  $this->sentSuccessResource($relatedResource,Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Related::find($id)->update($request->all());
        $relatedResource = RelatedResource::collection(Related::all());

        return $this->sentSuccessResource($relatedResource,Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Related::find($id)->delete();
        $relatedResource = RelatedResource::collection(Related::all());

        return $this->sentSuccessResource($relatedResource,Response::HTTP_OK);
    }
}
