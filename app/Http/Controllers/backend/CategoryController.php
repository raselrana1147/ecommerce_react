<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories=Category::orderBy('id','DESC')->get();

        return response()->json([
            "type"=>true,
            'messageType'=>'success',
            "message"=>"All Category List",
            "data"=>$categories
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

    public function changeStatus($id){
       $category=Category::find($id);
       if ($category->status==1) {
           $category->status=2;
       }else{
        $category->status=1;
       }
       $category->save();
       return response()->json([
        "type"=>true,
        'messageType'=>'success',
        "message"=>"Category updated",
        "data"=>$category
    ]);
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
            'name'=>'required|string|unique:categories',
        ]);
        if ($validator->fails()) {
            return response()->json([
                "type"=>false,
                'messageType'=>'error',
                "message"=>$validator->getMessageBag(),
            ]);
        }else{
            $category=new Category();
            $category->name=$request->name;
            $category->save();

            return response()->json([
                "type"=>true,
                'messageType'=>'success',
                "message"=>"Category added Successfully",
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
        $category=Category::find($id);
        return response()->json([
            "type"=>true,
            'messageType'=>'success',
            'data'=>$category
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
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
        $category=Category::find($id);
        $validator=\Validator::make($request->all(),[
            'name'=>'required|string|unique:categories,name,'.$category->id
        ]);
        if ($validator->fails()) {
            return response()->json([
                "type"=>false,
                'messageType'=>'error',
                "message"=>$validator->getMessageBag(),
            ]);
        }else{
            $category->name=$request->name;
            $category->save();

            return response()->json([
                "type"=>true,
                'messageType'=>'success',
                "message"=>"Category updated Successfully",
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category=Category::find($id);
        $category->delete();

        return response()->json([
            "type"=>true,
            'messageType'=>'success',
            "message"=>"Category Delete Successfully",
        ]);
    }
}