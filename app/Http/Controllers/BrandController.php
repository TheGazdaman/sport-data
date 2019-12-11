<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Brand;

class BrandController extends Controller
{
    public function page (Request $request)
    {
        $brandsQuery = Brand::query();

        if($request->has("sort"))
        {
            $brands = $brandsQuery->orderBy("name", $request->input("sort"))->paginate($request->input("per_page"));
            
            return $brands;

        } else {
            $brands = $brandsQuery->orderBy("name", 'ASC')->paginate($request->input("per_page"), 36);
        
            return $brands;
        }
    }

    public function store (Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:127',
            //'image_file' => 'file|image|max:5000',
        ]);
       
        $brands = Brand::create($request->all());
        $brand->name = $request->input('name');
        //$brand->image_file = $request->input('image_file');
        $brands->save();

        return ['Success'];
        
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|max:127',
            //'image_file' => 'file|image|max:5000',
        ]);

        $brand = Brand::findOrFail($id);
        $brand->name = $request->input('name');
        //$brand->image_file = $request->input('image_file');
        $brand->save();

        return ['Update success'];
    }


    public function destroy($id) 
    {
        $brand = Brand::findOrFail($id);
        $brand->delete();

        return 'Brand deleted';
    }
}
