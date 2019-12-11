<?php

use Illuminate\Database\Seeder;
use DiDom\Document;
use App\Brand;

class BrandsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $url = 'https://www.sportisimo.cz/znacky/';
        $cache_file = storage_path('scraping_cache/'.Str::slug($url));
        if (!file_exists($cache_file)) {
            $curl = curl_init();
        //  curl_setopt($curl, CURLOPT_COOKIEFILE, CACHE_DIR . DIRECTORY_SEPARATOR . 'cookies.txt');
        //  curl_setopt($curl, CURLOPT_COOKIEJAR, CACHE_DIR . DIRECTORY_SEPARATOR . 'cookies.txt');
        //  curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)");
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($curl, CURLOPT_HTTPGET, true);
            curl_setopt($curl, CURLOPT_URL, $url);
            $response = curl_exec($curl);
            file_put_contents($cache_file, $response);
        }
        $html = file_get_contents($cache_file);

        $document = new Document($html);
        $brands = $document->find('.subcat--icon');

        // dd($brands);
        $innerHtmlOfBrands = [];

        foreach ($brands as $brand) {
            $innerHtmlOfBrands[] = $brand->innerHtml();
        }
        // dd($innerHtmlOfBrands);
        foreach ($innerHtmlOfBrands as $innerHtmlOfBrand) {

            preg_match('#\<h2\>(.*?)\<#', $innerHtmlOfBrand, $slug);
            $name = $slug[1];

            preg_match('#\<img src=\"(.*?)\"#', $innerHtmlOfBrand, $slug);
            $image_url = $slug[1];

            $image_file = public_path('images/'.Str::slug($name).'.jpg');
            if(!file_exists($image_file))
            {
                file_put_contents(
                    $image_file,
                    file_get_contents($image_url)
                );
            }
            
            $brands = new Brand;
            $brands->name = $name;
            $brands->image_file = Str::slug($name).'.jpg';
            $brands->save();
        }
        // $author_element = $document->first('.post-authorName');
        // if ($author_element) {
        //     $author = $author_element->text();
        //     var_dump($author);
        // }
        // $body_element = $document->first('.post-body');
        // if ($body_element) {
        //     $body = $body_element->innerHtml();
        //     var_dump($body);
        // }
        // $image_element = $document->first('.data-sm_image');
        // if ($image_element)
        // {
        //     $image_url = $image_element->attr('src');
        // }
    }
}
