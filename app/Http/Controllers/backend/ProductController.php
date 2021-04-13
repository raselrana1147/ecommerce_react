<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products=Product::with('category')->orderBy('id','DESC')->get();

        return response()->json([
            "type"=>true,
            'messageType'=>'success',
            "message"=>"All product List",
            "data"=>$products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator=\Validator::make($request->all(),[
            'name'=>'required|string',
            'category_id'=>'required',
            'price'=>'required'
        ]);
        if ($validator->fails()) {
            return response()->json([
                "type"=>false,
                'messageType'=>'error',
                "message"=>$validator->getMessageBag(),
            ]);
        }else{
            $product=new Product();
            $product->name=$request->name;
            $product->price=$request->price;
            $product->category_id=$request->category_id;
            $product->save();

            return response()->json([
                "type"=>true,
                'messageType'=>'success',
                "message"=>"Product added Successfully",
            ]);
        }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}