



<script setup lang="ts">

const modules = [SwiperPagination , SwiperEffectFade]
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
  <section class="lg:px-24 lg:py-24 text-center space-y-6">
    <Swiper
        effect="fade"
        :speed="1000"
        :slides-per-view="1"
        :spaceBetween="10"
        :pagination="{
        clickable: true,

      }"

        :breakpoints="{
        '768': {
          //slidesPerView: 4,
          //slidesPerGroup: 4,
        },
      }"
        :modules="modules"
        class="overflow-hidden shadow-xl relative"
    >



      <SwiperSlide v-for="slide in hamburgers" :key="slide"
                   class="text-left bg-white"
      >

        <div class="hero flex">
          <div class="hero-content w-1/2 flex-col lg:flex-row-reverse">
            <div >
              <h2 class="text-[38px] text-primary  font-bebas  font-light uppercase ">
                {{slide.label}}</h2>
              <h2 class="text-[36px] lg:text-[50px] mb-2.5 text-primary leading-tight font-medium font-alfa uppercase ">
                {{slide.title}}
              </h2>

              <p class="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
              </p>

            </div>
          </div>
          <img :src="slide.img" class="w-1/2 block">

        </div>

      </SwiperSlide>

      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </Swiper>

  </section>

</template>

<style scoped>
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
.bullet  {


}
.pagination .swiper-pagination-bullet {
width: 2rem !important;
}


.pagination  {
  position: absolute;
  left: 4rem;
  bottom: 2rem
}

</style>
