<template>
  <section id="menu" class="pt-28   lg:pt-40  text-center uppercase flex flex-col">
    <h5 class="text-[22px] text-secondary w-56 mb-7 mx-auto font-bebas font-medium bg-neutral inline-block py-4 px-6">
      Always Tasty
      Burger</h5>
    <h2 class="section-title ">Choose &amp; Enjoy</h2>
    <p class=" text-sm xl:text-[17px] px-7 text-center font-light lowercase">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      <br class="hidden xl:block">
      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
    </p>
    <div class="flex w-full">
      <swiper
          class="swiper w-full"
          :slides-per-view="3"
          :loop="true"
          :speed="1000"
          :modules="[SwiperEffectCreative]"
          :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
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
        slidesPerView: 2

      },

          '1536': {
        slidesPerView: 3

      }
    }">
        <SwiperSlide v-for="(slide,index) in product.hamburgers" :key="slide"

                     class="hero pt-4 md:px-12"
        ><div v-if="slide"
               :class="'card-'+ slide.title"
               class="card transition-all mx-auto  h-full w-10/12"
               ref="box">
            <figure class="px-4 py-4 lg:px-10 2xl:py-10 h-full">
              <AtomsMenuImage
                  :src="slide.img"/>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title text-[38px] text-primary  xl:mb-2.5 font-bebas  font-medium uppercase ">
                {{ slide.title }}</h2>
              <p class="text-sm xl:text-[17px]  leading-snug  xl:leading-tight font-light lowercase contents">Lorem
                ipsum dolor sit amet,
                consectetur adipiscing elit, sed do</p>

              <h2 class="card-title text-[38px] text-primary   font-bebas  font-medium uppercase ">
                {{ slide.price }}</h2>
              <div class="card-actions">
                <button
                    class="btn button-orange">Buy Now
                </button>
              </div>
            </div>

          </div>
          <div
              class="box left-1/2 bottom-1/2 absolute z-[1000]">
          </div>
        </SwiperSlide>
      </swiper>
    </div>
  </section>
  <div

      id="cartbox"
      class=" select-none fixed container bg-red  top-5 left-5 w-10 h-16 bg-cover z-[1000]"
      ref="container"></div>
</template>
<script setup lang="ts">

import {ProductStore} from "~/store/productStore";


const product = ProductStore()
</script>