<template>
    <div>
      
        <div class="cart-icon position-fixed">
            <p class="pointer h1 mb-4"><i class="fas fa-arrow-circle-up hide" @click="Top()"></i></p>
            <p class="pointer h5"><i class="fas fa-shopping-cart text-c1 pl-1 position-relative shopping-cart">
                    <span class="position-absolute h8 circle text-light">
                       {{carts.total}}
                    </span>
                </i></p>
        </div>

    </div>
</template>

<script>


export default {
  data() {
    return {
      changebar: false,
    }
  },
  props: ['carts'],
  components: {

  },
  methods: {
        Top() {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
        },
        // getCarts() {
        //     const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
        //     this.$http.get(api).then((response) => {
        //         this.carts = response.data.data
        //     })
        // }
  },
  created() {
    //   this.getCarts();
  },
  mounted() {
        let icon = document.querySelector('.cart-icon');
        let topicon = document.querySelector('.fa-arrow-circle-up');
        window.addEventListener('scroll', function () {
                if (window.pageYOffset > icon.offsetTop / 2) {
                    topicon.classList.remove('hide');
                } else {
                    topicon.classList.add('hide');
                }
        })
       
           
  }
};
</script>

<style lang="scss" scoped>
   
    
</style>
