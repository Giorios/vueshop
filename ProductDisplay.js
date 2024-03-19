app.component('product-display', {

    template:
    /*html*/
    `
    <div class="container">        
    <div class="row">
    <div class="col">
      Color:
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Default
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Color</a></li>
          <li><a class="dropdown-item" href="#">Color</a></li>
          <li><a class="dropdown-item" href="#">Color</a></li>
        </ul>
      </div>
      <button id="button1">Add to Cart</button>
    </div>
    
    <div class="col">
      Color:
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Default
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Color</a></li>
          <li><a class="dropdown-item" href="#">Color</a></li>
          <li><a class="dropdown-item" href="#">Color</a></li>
        </ul>
      </div>
      <button id="button1">Add to Cart</button>
    </div>

    <div class="col">
      Color:
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Default
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Color</a></li>
          <li><a class="dropdown-item" href="#">Color</a></li>
          <li><a class="dropdown-item" href="#">Color</a></li>
        </ul>
      </div>
      <button id="button1">Add to Cart</button>
    </div>
  </div>
  </div>`,
  data: function() {
    return {
        selectedVariant: 0,

        variants: [
            { id: 2234, color: 'red', image: '',},
            { id: 2235, color: 'blue', image: '',},
        ],
        reviews: []
    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart() {
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
        this.selectedVariant = index;
    },       
    addReview(review) {
        this.reviews.push(review)
    }
}
})