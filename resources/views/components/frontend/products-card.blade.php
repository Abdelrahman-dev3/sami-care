<link rel="stylesheet" href="{{ asset('pages-css/products-card.css') }}">

<div class="product-card" data-product-id="{{ $product_id }}">
  @if(!empty($isInCart))
    <span class="product-card-badge">+</span>
  @endif
  <div class="product-image">
    @if(!empty($branch_name))
      <span class="product-branch-badge">
        <i class="bi bi-geo-alt-fill"></i>
        <span>{{ $branch_name }}</span>
      </span>
    @else
      <span class="product-branch-badge product-branch-badge--global">
        <i class="bi bi-grid-fill"></i>
        <span>كل الفروع</span>
      </span>
    @endif
    <img src="{{ $image  }}" alt="{{ $name }}">
  </div>
  <div class="product-content">
    <p class="category">
        @foreach($categories as $category)
            {{ $category->name }}
        @endforeach
    </p>
    <a href="{{ route('frontend.product.details' , $product_id) }}">
        <h3 class="product-title">{{$name}}</h3>
    </a>

    <div class="rating">
      ★★★★★
    </div>

    <p class="description">
        {{$des}}
    </p>

    <div class="bottom">
      <span class="price">{{$max_price}} {{ __('messagess.SAR') }}</span>
      @auth
          <button class="add-to-cart {{ !empty($isInCart) ? 'added' : '' }}" onclick='addtocart({{$product_id}})'>
            <span style="font-weight: bold;width: 100%;">
                {{ __('messagess.add_to_cart') }}
            </span>
          </button>
      @endauth
      @guest
          <button class="add-to-cart {{ !empty($isInCart) ? 'added' : '' }}" onclick='shownav()'>
            <span style="font-weight: bold;width: 100%;">
                {{ __('messagess.add_to_cart') }}
            </span>
          </button>
      @endguest
    </div>
  </div>
</div>
