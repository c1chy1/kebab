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

        <div class=" hero-content items-start max-w-full p-6">
          <div class=" w-1/2  py-16 pl-12 pr-7">

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

          <img :src="slide.img" class="w-1/2">

        </div>

      </SwiperSlide>
      <div class="pagination swiper-pagination">


      </div>
    </Swiper>

  </section>

</template>

<style lang="scss" scoped>

.swiper-pagination {
  left: 4.5rem;
  bottom: 4rem;
  text-align: left;
}

/*

.sliderWrapper {
  :global(.swiper-pagination-bullet) {
    background: red;
    width: 1rem;
    height: 1rem;
    border-radius: .5rem;
    opacity: 1;
    position: absolute;
    left:5rem;
    bottom: 5rem
  }

  :global(.swiper-pagination-bullet-active) {
    background-color: blue;
    width: 1rem;
    height: 1rem;
    border-radius: .5rem;
  }
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: blue;
  opacity: 1;
}

!* target all bullets *!
.swiper-pagination-bullet {
  background-color: red;
  opacity: 1;
}
.swiper-pagination-bullet-custom {

  width: 230px;
  height: 230px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0,0,0,0.2);
}
.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}
*/


</style>
