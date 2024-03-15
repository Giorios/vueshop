app.component('review-form', {
    template:
    /*html*/
    `        
    <div class="row my-5">
    <div class="col-4">
      Leave a review?
      <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
    
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <br/>

        <div class="checkbox-wrapper-46">
          <input type="checkbox" id="cbx-46" class="inp-cbx" />
          <label for="cbx-46" class="cbx"
            ><span>
              <svg viewBox="0 0 12 10" height="10px" width="12px">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
              </span><span>Would you recommend this product?</span>
          </label>
        </div>
        <br/>

        <input class="button" type="submit" value="submit">
      </form>
    </div>

              <div class="col-4">
      Leave a review?
      <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
    
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <br/>

        <div class="checkbox-wrapper-46">
          <input type="checkbox" id="cbx-46" class="inp-cbx" />
          <label for="cbx-46" class="cbx"
            ><span>
              <svg viewBox="0 0 12 10" height="10px" width="12px">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
              </span><span>Would you recommend this product?</span>
          </label>
        </div>
        <br/>

        <input class="button" type="submit" value="submit">
      </form>
    </div>

    <div class="col-4">
      Leave a review?
      <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
    
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <br/>

        <div class="checkbox-wrapper-46">
          <input type="checkbox" id="cbx-46" class="inp-cbx" />
          <label for="cbx-46" class="cbx"
            ><span>
              <svg viewBox="0 0 12 10" height="10px" width="12px">
                <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg>
              </span><span>Would you recommend this product?</span>
          </label>
        </div>
        <br/>

        <input class="button" type="submit" value="submit">
      </form>
    </div>
    
  </div>
  `,
  data(){
    return{
        name: '',
        rating: null,
        recommend: null
    }
},
methods: {
    onSubmit() {
        if (this.name === '' || this.rating === null) {
            alert ('Review is incomplete. Please fill out every field.')
            return
        }

        let productReview = {
            name: this.name,
            rating: this.rating,
            recommend: this.recommend
        }
        this.$emit('review-submitted', productReview)

        this.name = ''
        this.rating = ''
        this.recommend - null
    }
}
})