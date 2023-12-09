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
  <section class="text-center uppercase">
    <h5 class="text-[22px] text-secondary mb-7 font-bebas font-medium bg-neutral inline-block py-2 px-6">Always Tasty Burger</h5>
    <h2 class="text-[36px] lg:text-[50px] mb-2.5 text-primary leading-tight font-medium font-alfa  ">Choose &amp; Enjoy</h2>
    <p class="text-[17px] px-7 text-center font-light lowercase">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br>
      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
    </p>

    <Swiper

        class="flex md:block h-screen  background-dark transition-all duration-500"

        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
        :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    >
      <SwiperSlide v-for="slide in hamburgers" :key="slide"
                   class="hero pt-16 lg:pt-36 md:px-12 "
      >
        <div v-if="slide">
          <div
              class="relative flex flex-col items-center text-center lg:text-left lg:justify-between   lg:flex-row-reverse uppercase "
          ><img
              :src="slide"
              class="logo-box w-4/5 md:w-1/2 object-scale-down"/>

            <h4 class="text-[38px] text-primary py-6 mb-2.5 font-bebas  font-medium uppercase ">Hamburger2</h4>
            <p class="text-[17px] w-1/2 mb-9 leading-tight font-light lowercase">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>

        </div>


      </SwiperSlide>
    </Swiper>


  </section>
</template>

<style scoped>

</style>