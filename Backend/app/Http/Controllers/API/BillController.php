<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\BillResource;
use App\Models\Bill;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bills = Bill::all();
        $billsResource = BillResource::collection($bills);

        return $this->sentSuccessResource($billsResource,Response::HTTP_OK);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Bill::create($request->all());

        $bill = Bill::all();
        $billResource = BillResource::collection($bill);

        return $this->sentSuccessResource($billResource,Response::HTTP_OK);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $bill = Bill::where('user_id',$id)->get();

        $billResource = BillResource::collection($bill);

        return $this->sentSuccessResource($billResource,Response::HTTP_OK);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $bill = Bill::find($id);
        return $bill->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $bill = Bill::find($id);
        $bill->delete();
        $billResource = BillResource::collection(Bill::all());

        return $this->sentSuccessResource($billResource,Response::HTTP_OK);

    }
}
