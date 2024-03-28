<template>
  <section id="header" class="flex bg-[url('/bg.png')]
   bg-no-repeat bg-center bg-cover h-screen ">

    <Swiper

        class="md:block h-screen  background-dark transition-all duration-500 w-full "
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :speed="1000"
        :effect="'creative'"
        :autoplay="{
      delay: 40000000,
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
                   class="hero px-4"
      >
        <div v-if="slide">
          <div
              class="h-screen relative flex flex-col sm:flex-row items-center justify-center
               text-center lg:text-left lg:justify-center lg:flex-row-reverse uppercase "
          >
            <div>
              <nuxt-img
                  preload
                  format="webp"
                  :src="slide"
                  class="logo-box mx-auto w-3/4 sm:w-full  lg:mr-0  xl:w-full object-scale-down cursor-grab active:cursor-grabbing opacity-0 "/>
              <div
                  id="banner"
                  class="hidden absolute overflow-hidden xl:flex items-center h-[104px] w-[104px] min-w-[104px]   md:h-[160px] md:min-w-[160px] xl:bottom-[200px]  xl:right-[120px]  p-2 md:p-2.5  bg-[#ff6d00] rounded-full  object-cover  opacity-0 ">
                <article
                    class="relative flex flex-col items-center justify-center w-full h-full p-[10px] text-[30px]  md:text-[60px]  md:leading-[80px] border-2 border-dashed border-white  rounded-full text-white font-base font-bebas  transform rotate-[20deg]">
                  20% <span class="text-[24px] md:text-[33px] leading-[20px]">Off</span></article>


              </div>
            </div>
            <div class=" max-w-full lg:w-1/2 xl:text-left  flex flex-col items-center lg:items-start">
              <h3 class=" w-full  py-0  sm:py-1  lg:w-auto  px-2  lg:px-3 lg:py-2 mb-4  text-[12px] lg:text-[16px]  xl:text-[24px] text-primary border-primary font-medium font-bebas border-dashed border-2 inline-block rounded-[3px] opacity-0 ">
                It is a good time for the great taste of kebabs
              </h3>
              <h1 class=" lg:mt-4  text-[38px]  lg:text-[48px] xl:text-[94px] text-primary  font-alfa font-medium flex flex-col leading-none tracking-wider  drop-shadow-[4px_5px_#fee7ba] whitespace-pre-line overflow-hidden truncate text-ellipsis  transition-all duration-500 opacity-0 ">
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

import gsap from 'gsap'
const kebabs = reactive([
  'images/slides/1.png',
  'images/slides/1.png'
])

onMounted(()=> {

  gsap.fromTo(
      "#header h1",
      {
        duration: 1.5,
        delay: 1,
        opacity:0,
        ease: "power3.inOut",
      },
      {
        duration: 0.5,
        opacity: 1,
        delay: 1,
        ease: "power3.inOut",
      }
  );


  gsap.fromTo(
      "#header img",
      {
        opacity: 0.5,
        duration: 1,
        ease: "power3.inOut",
      },
      {
        duration: 0.5,
        opacity: 1,
        ease: "power3.inOut",
      }
  );


  gsap.fromTo(
      "#header h3",
      {
        duration: 1.5,
        y: 0,
        delay: 1,
        ease: "power3.inOut",
  /*      onComplete: () => {
          gsap.to("#header h3", {
            y: 20,
            duration: 1,
            ease: "sine.easeInOut",
            repeat: -1,
            yoyo: true,
          });
        },*/
      },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: 0.7,
        ease: "power3.inOut",
        stagger: 0.1,
      }
  )
  gsap.fromTo(
      ['#banner','.shadow'],
      {
        opacity:0,
      },
      {
        opacity: 1,
        delay: 3,
      })


  const tl = gsap.timeline({ repeat: -1, yoyo: true ,delay:3 })
  tl.add('start')
      .to("#banner", .70, {
        y: 150,
        ease: "Circ.ease",
      })
      .to("#banner", .10, {
        scaleY: 0.8,
        transformOrigin: 'center bottom',
        borderBottomLeftRadius: '40%',
        borderBottomRightRadius: '40%',
        ease: "Circ.ease"
      }, '-=.05')
      .to(".shadow", .5, {
        width: 220,
        opacity: .7,
        ease: "Circ.ease"
      }, 'start');


})

</script>
<style scoped>
.shadow {
  width: 60px;
  height: 30px;
  background: radial-gradient(ellipse at center, rgba(88,24,69,1) 0%, rgba(237,237,237,0) 50%);
  transform: translateY(75px);
  z-index: -1;
}
</style>