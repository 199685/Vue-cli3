<template>
    <div>
        <div class="header py-2" :class="{ openmenu: changebar}">

                <div class="d-flex">
                    <h1 class="text-center logo mx-auto">
                        <a href="./index.html" class="text-color">
                            <img class="" src="../../assets/images/logo-1.png" alt="" width="100">
                            HAPPY FRUIT
                            <span class="h8 d-none d-md-inline-block ">since 1996</span>
                        </a>
                    </h1>
                    <div class="menu mt-4 mr-md-5 mr-3 pointer" @click="ChangeBar()">
                        <div class="bar1" :class="{change: changebar}"></div>
                        <div class="bar2 my-1" :class="{change: changebar}"></div>
                        <div class="bar3" :class="{change: changebar}"></div>
                    </div>

                </div>

                <div class="menu-link text-center text-dark" :class="{ menu_link_display:changebar}">
                    <h3><a href="./products.html" class="text-color active">Products</a></h3>
                    <h3><a href="#" class="text-color">Shopping Cart</a></h3>
                    <h3><a href="#" class="text-color">Favourite</a></h3>
                    <h3><a href="#" class="text-color">Sign in</a></h3>

                </div>

        </div>

        
        

    </div>
</template>

<script>


export default {
  data() {
    return {
         changebar: false,
         carts: []
    }
  },
  components: {

  },
  methods: {
        ChangeBar() {
                this.changebar = !this.changebar;
                document.querySelector('.cart-icon').classList.toggle('d-none')
        },
     
  },
  created() {
    
  },
  mounted() {
        document.body.style.background ="linear-gradient(270deg, rgba(193, 255, 170, .23), rgba(240, 135, 135, .52))";
           
  }
};
</script>

<style lang="scss" scoped>
   
    
</style>
