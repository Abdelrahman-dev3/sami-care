<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<link rel="stylesheet" href="{{ asset('pages-css/products-card.css') }}">
@php
    $cartProductIds = auth()->check() ? \Modules\Product\Models\Cart::where('user_id', auth()->id())->pluck('product_id')->toArray() : [];
@endphp
@include('components.frontend.notifications')
<section class="py-5">
    <div class="container"  style="padding: 0 5rem;">
        <h2 class="mb-5 text-center" style="font-size: 42px;background: linear-gradient(90deg, #CF9233, #212121);-webkit-background-clip: text;-webkit-text-fill-color: transparent;font-size: 2.5rem; font-weight: bold;">
            {{ __('product.3naya_product') }}
        </h2>
        @if(isset($products) && $products->count() > 0)
            <div class="row g-4">
                @foreach($products as $index => $product)
                    <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="{{ $index * 100 }}">

                        @include('components.frontend.products-card', [
                            'image' => $product->feature_image,
                            'name' => $product->name,
                            'des' => $product->short_description,
                            'product_id' => $product->id,
                            'categories' => $product->categories,
                            'min_price' => $product->min_price,
                            'max_price' => $product->max_price,
                            'isInCart' => in_array($product->id, $cartProductIds),
                        ])
                    </div>
                @endforeach
            </div>
        <a href="{{ route('frontend.Shop') }}" class="more-btn">
            <p style="color:white;font-size: 16px;margin: 0 13px;">{{ __('product.learn_more') }}</p>
            <span class="arrow" style="color: white;"><span class="iconify" data-icon="tabler:arrow-left" data-width="22"></span></span>
        </a>
        @else
            <div class="text-center py-5">
                <p class="text-muted">{{ __('product.no_product') }}</p>
            </div>
        @endif
    </div>
</section>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
    AOS.init({ once: true });
        function addtocart(productId) {
        fetch(`/cart/add/${productId}`)
            .then(response => response.json())
            .then(data => {
                createNotify({ title: data.status , desc: data.message });
                CartSidebar.refresh();   // re-fetch cart data + update badge
                CartSidebar.open();
                markProductAdded(productId);
            })
            .catch(error => {
                createNotify({ title: data.status, desc: data.message });
            });
    }
    function shownav(){
        createNotify({
            title: "{{ __('product.notification') }}",
            desc: "{{ __('product.login_required_feature') }}"
        });
    }

    function markProductAdded(productId) {
        const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
        if (!card) return;

        card.classList.add('in-cart');
        const button = card.querySelector('.add-to-cart');
        if (button) button.classList.add('added');

        if (!card.querySelector('.product-card-badge')) {
            const badge = document.createElement('span');
            badge.className = 'product-card-badge';
            badge.textContent = '+';
            card.prepend(badge);
        }
    }
</script>
