<template>
    <div>
     <swiper class="swiper" :options="swiperOption">
        <swiper-slide :style= "` background-image: url( ${imgUrl} )`">Slide 1</swiper-slide>
        <swiper-slide :style= "` background-image: url( ${imgUrl} )`">Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="point-img-size bg-cover" :style= "` background-image: url( ${imgUrl} )`"></div>
    
    </div>
</template>

<script>


import { Swiper, SwiperSlide, Navigation, Pagination} from 'vue-awesome-swiper'


 

export default {
    
    data() {
      return {
        imgUrl:  require("../../assets/images/無農藥.jpg"),
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
           loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      Navigation, 
      Pagination
    },
   
   
  }
  
</script>

<style lang="scss" scoped>
//   @import './base.scss';


</style>