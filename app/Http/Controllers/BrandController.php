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

    public function store ()
    {
       
    }
    
    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    
}
