<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Category\Models\Category;
use Modules\Product\Models\Product;
use Modules\Product\Transformers\ProductResource;
use Modules\Package\Models\Package;
use App\Models\Branch;
use App\Models\BookingReview;
use App\Models\Wheel;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        // 1. Categories (Services)
        $categories = Category::where('status', 1)
            ->whereNull('parent_id')
            ->with(['services' => function ($query) {
                $query->where('status', 1);
            }])
            ->orderBy('sort_order')
            ->orderBy('id')
            ->take(6)
            ->get();

        // 2. Offers
        $offers = Package::query()
            ->with(['branch', 'service.services'])
            ->where('status', 1)
            ->offerPackages()
            ->latest('id')
            ->take(6)
            ->get();

        // 3. Products
        $products = Product::with('media', 'categories', 'brand', 'unit', 'product_variations', 'product_review')
            ->where('status', 1)
            ->where('is_featured', 1)
            ->whereNull('deleted_at')
            ->take(6)
            ->get();

        // 4. Packages
        $packages = Package::query()
            ->where('status', 1)
            ->activeBasePackages()
            ->latest('id')
            ->take(6)
            ->get()
            ->map(fn(Package $package) => $this->transformPackage($package));


        // 5. Branches
        $branches = Branch::with('address.state_data')
            ->where('status', 1)
            ->whereNull('deleted_by')
            ->take(6)
            ->get()
            ->map(fn(Branch $branch) => $this->transformBranch($branch));


        // 6. Customer Reviews
        $reviews = BookingReview::with(['user', 'booking.branch'])
            ->where('status', 1)
            ->where('is_approved', 1)
            ->latest()
            ->take(6)
            ->get()
            ->map(fn(BookingReview $review) => $this->transformReview($review));


        // 7. Wheel of Fortune Prizes
        $wheel_prizes = Wheel::query()
            ->where('reward_value', '>', 0)
            ->orderBy('id')
            ->get()
            ->map(function (Wheel $wheel) {
                return [
                    'id' => $wheel->id,
                    'type' => $wheel->type,
                    'reward_value' => (float) $wheel->reward_value,
                ];
            });

        return response()->json([
            'status' => true,
            'data' => [
                'categories' => $categories,
                'offers' => $offers,
                'products' => ProductResource::collection($products),
                'packages' => $packages,
                'branches' => $branches,
                'reviews' => $reviews,
                'wheel_prizes' => $wheel_prizes,
            ],
            'message' => 'Home page data retrieved successfully',
        ]);
    }

    private function transformPackage(Package $package): array
    {
        app()->setLocale('ar');
        $name = $package->name;

        return [
            'id' => $package->id,
            'name' => is_array($name)
                ? ($name[app()->getLocale()] ?? $name['ar'] ?? reset($name))
                : $name,
            'description' => $package->description,
            'feature_image' => $package->image ?: $package->feature_image,
            'package_price' => (float) $package->package_price,
        ];
    }

    private function transformBranch(Branch $branch): array
    {
        $name = $branch->name;
        $address = $branch->address;

        $addressParts = array_filter([
            $address?->address_line_1,
            $address?->state_data?->name,
        ]);

        return [
            'id' => $branch->id,
            'name' => is_array($name)
                ? ($name[app()->getLocale()] ?? $name['ar'] ?? reset($name))
                : $name,
            'address' => $addressParts ? implode('، ', $addressParts) : null,
            'image' => $branch->feature_image,
        ];
    }

    private function transformReview(BookingReview $review): array
    {
        $branchName = $review->booking?->branch?->name;

        return [
            'id' => $review->id,
            'rating' => (int) $review->rating,
            'name' => $review->user?->full_name ?: 'عميل سامي',
            'place' => is_array($branchName)
                ? ($branchName[app()->getLocale()] ?? $branchName['ar'] ?? reset($branchName))
                : $branchName,
            'text' => $review->review_text,
            'when' => $review->created_at?->diffForHumans(),
        ];
    }
}
