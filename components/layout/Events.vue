<script setup lang="ts">

const modules = [SwiperPagination, SwiperEffectFade]
const hamburgers = reactive([

  {
    img: 'images/event/event_1.png',
    label: 'Discover',
    title: 'Upcoming Events',


  },
  {
    img: 'images/event/event_2.png',
    label: 'Always Tasty',
    title: 'Choose & Enjoy',

  },
  {
    img: 'images/event/event_1.png',
    label: 'Discover',
    title: 'Upcoming Events',
  }
])
</script>

<template>
  <section id="events" class="lg:px-20 lg:py-24 text-center space-y-6">
    <Swiper
        effect="fade"
        :speed="1000"
        :slides-per-view="1"
        :spaceBetween="15"
        :pagination="{
        clickable: true,
          el: '.pagination',
      }"
        :style="{
        '--swiper-pagination-bullet-width': '17px',
        '--swiper-pagination-bullet-height': '17px',
        '--swiper-pagination-color': '#ff6d00',
        '--swiper-pagination-bullet-horizontal-gap': '6px'
      }"
        :breakpoints="{
        '768': {

          //slidesPerView: 4,
          //slidesPerGroup: 4,
        },
      }"
        :modules="modules"
        class="overflow-hidden hero shadow-xl relative"
    >


      <SwiperSlide v-for="slide in hamburgers" :key="slide"
                   class="text-left bg-white"
      >

        <div class=" hero-content flex-col-reverse lg:items-start lg:max-w-full p-6">
          <div class=" w-full lg:w-1/2   py-8 lg:py-16 lg:pl-12 lg:pr-7">

            <h2 class="text-[29px] text-primary  font-bebas  font-light uppercase ">
              {{ slide.label }}</h2>
            <h2 class="text-[36px] lg:text-[42px] mb-2.5 text-primary leading-tight font-medium font-alfa uppercase ">
              {{ slide.title }}
            </h2>

            <p class=" text-[21px] leading-8 py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>


          </div>

          <img :src="slide.img" class=" w-full lg:w-1/2">

        </div>

      </SwiperSlide>
      <div class="pagination swiper-pagination ">


      </div>
    </Swiper>

  </section>

</template>

<style lang="scss" scoped>


@media screen and (min-width: 1024px) {
  .swiper-pagination  {
    left: 4.5rem;
    bottom: 4rem;
    text-align: left;
  }
}


</style>
