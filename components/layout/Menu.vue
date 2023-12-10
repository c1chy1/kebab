<script setup lang="ts">
const hamburgers = reactive([
  'images/menu-slides/menu_1.png',
  'images/menu-slides/menu_2.png',
  'images/menu-slides/menu_3.png',
  'images/menu-slides/menu_4.png',
  'images/menu-slides/menu_2.png',
  'images/menu-slides/menu_3.png',
])
</script>

<template>
  <section class="text-center uppercase ">
    <h5 class="text-[22px] text-secondary mb-7 font-bebas font-medium bg-neutral inline-block py-2 px-6">Always Tasty Burger</h5>
    <h2 class="text-[36px] lg:text-[50px] mb-2.5 text-primary leading-tight font-medium font-alfa  ">Choose &amp; Enjoy</h2>
    <p class="text-[17px] px-7 text-center font-light lowercase">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br>
      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
    </p>
<div class="flex w-full">

  <swiper
      class="swiper"
      :slides-per-view="3"
       :loop="true"
      :space-between="0"
      :centered-slides="true"
      :pagination="{ clickable: true }"
      :breakpoints="{
      '0': {
        slidesPerView: 1,
        spaceBetween: 20
      },
      '640': {
        slidesPerView: 2,
        spaceBetween: 40
      },
      '1024': {
        slidesPerView: 3,

      }
    }"
  >
    <SwiperSlide v-for="slide in hamburgers" :key="slide"
                 class="hero py-16 lg:pt-36 md:px-12"
    >
      <div v-if="slide" class="card mx-auto  h-full w-10/12 bg-base-100 shadow-xl">
        <figure class="px-10 py-10 h-1/2">
          <img  :src="slide" alt="Shoes"  class=" z-10" />
        </figure>
        <div class="card-body items-center text-center h-1/2">
          <h2 class="card-title text-[38px] text-primary py-4 mb-2.5 font-bebas  font-medium uppercase ">Hamburger2</h2>
          <p class="text-[17px]  4 leading-tight font-light lowercase contents">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <div class="card-actions">
            <button class="btn button-orange">Buy Now</button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </swiper>



<!--    <Swiper

        class=" h-screen  background-dark transition-all duration-500"

        :modules="[ SwiperEffectCreative]"
        :slides-per-view="3"
        :loop="true"
:free-mode="true"
        :effect="'creative'"
        :creative-effect="{
      prev: {
        shadow: false,
        translate: ['0%', 0, 0],
      },
      next: {
        translate: ['100%', 0,0],
      },
    }"
    >
      <SwiperSlide v-for="slide in hamburgers" :key="slide"
                   class="hero pt-16 lg:pt-36 md:px-12 "
      >
        <div v-if="slide" class="card mx-auto w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img  :src="slide" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-[38px] text-primary py-6 mb-2.5 font-bebas  font-medium uppercase ">Hamburger2</h2>
            <p class="text-[17px]  mb-9 leading-tight font-light lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <div class="card-actions">
              <button class="btn button-orange">Buy Now</button>
            </div>
          </div>
        </div>

&lt;!&ndash;        <div v-if="slide">
          <div
              class="relative flex flex-col items-center text-center lg:text-left lg:justify-between   lg:flex-row-reverse uppercase "
          ><img
              :src="slide"
              class="logo-box w-4/5 md:w-1/2 object-scale-down"/>

            <h4 class="text-[38px] text-primary py-6 mb-2.5 font-bebas  font-medium uppercase ">Hamburger2</h4>
            <p class="text-[17px] w-1/2 mb-9 leading-tight font-light lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>

        </div>&ndash;&gt;


      </SwiperSlide>
    </Swiper>-->

</div>
  </section>
</template>

<style scoped>

.swiper-slide-active img  {

  transition: all 1s;
  transform: scale(1.15);

}
</style>