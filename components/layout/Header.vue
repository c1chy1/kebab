<template>
  <section id="header" class="flex bg-[url('/bg.png')]  bg-no-repeat bg-center bg-cover h-screen z-1">

    <Swiper

              class=" md:block h-screen  background-dark transition-all duration-500"
              :modules="[SwiperAutoplay, SwiperEffectCreative]"
              :slides-per-view="1"
              :loop="true"
              :speed="1000000"
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
            <SwiperSlide v-for="slide in kebabs" :key="slide"
                         class="hero  px-4 lg:px-12 "
            >
              <div v-if="slide">
                <div
                    class=" h-screen  flex flex-col items-center justify-center text-center lg:text-left lg:justify-between   lg:flex-row-reverse uppercase "
                >

<div class="relative">
                  <img
                    :src="slide" class="relative logo-box w-full xl:w-full object-scale-down"/>
</div>
            <div class="hidden absolute overflow-hidden lg:flex items-center h-[104px] w-[104px] min-w-[104px]   md:h-[160px] md:min-w-[160px] xl:top-[200px]  xl:right-[120px]  p-2 md:p-2.5  bg-[#ff6d00] rounded-full  object-cover">

            <article
                      class="relative flex flex-col items-center justify-center w-full h-full p-[10px] text-[30px]  md:text-[60px]  md:leading-[80px] border-2 border-dashed border-white  rounded-full text-white font-base font-bebas  transform rotate-[20deg]">

                    20% <span class="  text-[24px] md:text-[33px] leading-[20px]">Off</span></article>
            </div>


                  <div class="   xl:text-left  flex flex-col items-start">
              <h3 class=" w-full  py-0  sm:py-1  lg:w-auto   lg:px-4 lg:py-2 mb-4  text-[14px] lg:text-[16px]  xl:text-[24px] text-primary border-primary font-medium font-bebas border-dashed border-2 inline-block rounded-[3px] ">
                It is a good time for  the great taste of kebabs
              </h3>
              <h1 class="  text-[48px]   md:text-[94px] text-primary  font-alfa font-medium flex flex-col leading-none tracking-wider  drop-shadow-[4px_5px_#fee7ba] whitespace-pre-line overflow-hidden truncate text-ellipsis  transition-all duration-500">
                Turkish
                <span class="text-[28px] md:text-[46px] pt-4">Kebab</span>
              </h1>

            </div>
          </div>

        </div>


      </SwiperSlide>
    </Swiper>
  </section>
</template>
<script setup lang="ts">
const kebabs = reactive([
  'images/slides/1.png',
  'images/slides/1.png'
])

</script>
<style scoped>

</style>