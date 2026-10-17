<?php
namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Services\HomeService;
use Modules\Category\Models\Category;

class SitemapController extends Controller
{
    public function __invoke()
    {
        $base = rtrim(config('seo_site.url'), '/');
        $private = ['/booking','/booking-receipt','/gift-recipient','/account'];
        $paths = array_values(array_diff(array_keys(config('frontend_seo')), $private));
        if (!app(HomeService::class)->settings()['enabled']) $paths = array_values(array_diff($paths, ['/home-service']));
        foreach (Category::where('status', 1)->orderBy('id')->cursor() as $category) $paths[]='/services/'.$category->id;
        foreach (Blog::published()->orderBy('id')->cursor() as $blog) $paths[]='/blog/'.rawurlencode($blog->slug);
        $xml = '<?xml version="1.0" encoding="UTF-8"?>'."\n".'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'."\n";
        foreach (array_unique($paths) as $path) $xml .= '  <url><loc>'.htmlspecialchars($base.$path, ENT_XML1 | ENT_QUOTES, 'UTF-8')."</loc></url>\n";
        return response($xml.'</urlset>', 200)->header('Content-Type','application/xml; charset=UTF-8')->header('Cache-Control','public, max-age=300');
    }
}
