<script setup lang="ts">


const hamburgers = reactive([

  {
    img: 'images/menu-slides/menu_1.png',
    title: 'Hamburger1',

  },
  {
    img: 'images/menu-slides/menu_2.png',
    title: 'Hamburger2',

  },
  {
    img: 'images/menu-slides/menu_3.png',
    title: 'Hamburger3',

  },
  {
    img: 'images/menu-slides/menu_4.png',
    title: 'Hamburger4',

  },
  {
    img: 'images/menu-slides/menu_2.png',
    title: 'Hamburger5',

  },
  {
    img: 'images/menu-slides/menu_3.png',
    title: 'Hamburger6',
  }

])
</script>

<template>
  <section id="menu" class=" pt-24 text-center uppercase flex flex-col">
    <h5 class="text-[22px] text-secondary w-56 mb-7 mx-auto font-bebas font-medium bg-neutral inline-block py-4 px-6">Always Tasty
      Burger</h5>
    <h2 class="section-title ">Choose &amp; Enjoy</h2>
    <p class="text-[17px] px-7 text-center font-light lowercase">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua.
      <br>
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
        slidesPerView: 3,

      }
    }"
      >
        <SwiperSlide v-for="slide in hamburgers" :key="slide"
                     class="hero pt-4  md:px-12"
        >
          <div v-if="slide" class="card mx-auto  h-full w-10/12">
            <figure class="px-4 py-4 lg:px-10 lg:py-10 h-1/2">
              <img
                  :src="slide.img"
                  class="z-10"/>
            </figure>
            <div class="card-body items-center text-center h-1/2">
              <h2 class="card-title text-[38px] text-primary lg:mb-2.5 font-bebas  font-medium uppercase ">
                {{slide.title}}</h2>
              <p class="text-[17px]  4 leading-tight font-light lowercase contents">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do</p>
              <div class="card-actions">
                <button class="btn button-orange">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>

.swiper-slide-next img {

  transition: all 1s;
  transform: scale(1.15);

}
</style>