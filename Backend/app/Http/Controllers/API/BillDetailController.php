<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BillDetailResource;
use App\Models\BillDetail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BillDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $billDetailResource = BillDetailResource::collection(BillDetail::all());

        return $this->sentSuccessResource($billDetailResource,Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        BillDetail::create($request->all());
        $billDetailResource = BillDetailResource::collection(BillDetail::all());

        return $this->sentSuccessResource($billDetailResource,Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $billDetail = BillDetail::where('bill_id',$id)->get();
        $billDetailResource = BillDetailResource::collection($billDetail);

        return $this->sentSuccessResource($billDetailResource,Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        BillDetail::find($id)->update($request->all());
        $billDetailResource = BillDetailResource::collection(BillDetail::all());

        return $this->sentSuccessResource($billDetailResource,Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        BillDetail::find($id)->delete();
        $billDetailResource = BillDetailResource::collection(BillDetail::all());
        
        return $this->sentSuccessResource($billDetailResource,Response::HTTP_OK);
    }
}
