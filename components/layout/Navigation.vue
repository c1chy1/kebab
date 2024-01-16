
<template>
  <header class=" fixed z-50 w-full" >
    <nav ref="image" class="navbar  w-full z-[0]
bg-repeat-round  px-4  xl:px-12  font-bebas">
      <div class="navbar-start  flex-row py-4 w-1/2 lg:w-1/4">
<AtomsLogo
    color="Green"
    label="Burger House"
    text-size="   text-2xl xl:text-4xl"
    svg-size=" w-10 lg:w-12 xl:w-16"
    src="/logo.png"
    class="space-x-2 xl:space-x-4"
/>
      </div>
      <div class="navbar-end lg:flex items-end flex-col  text-primary  w-3/4">
        <div class="hidden sm:flex items-center pr-20 space-x-5 lg:pt-6 lg:pr-9 ">
          <img class="animate-shake delay-500" src="/delivery-icon.png" >
          <h2 class="text-base text-center font-semibold font-mont py-5 tracking-wider transition-all duration-500"  >Call for Delivery +4 450 68 7474</h2>
        </div>
        <ul ref="menu" class="menu menu-horizontal  hidden lg:flex justify-end gap-4 px-1 lg:text-[18px] xl:text-[25px] tracking-[3px] xl:tracking-[4px] relative uppercase transition-all duration-500">
          <li><nuxt-link hash="#header" @click="$scrollTo('#header')" >Home</nuxt-link></li>
          <li><nuxt-link hash="#menu" @click="$scrollTo('#menu')"  >Menu</nuxt-link></li>
          <li><nuxt-link hash="#events" @click="$scrollTo('#events')">Events</nuxt-link></li>
          <li><nuxt-link hash="#register" @click="$scrollTo('#register')">Register</nuxt-link></li>
          <li><nuxt-link hash="#gallery" @click="$scrollTo('#gallery')">Gallery</nuxt-link></li>
          <li><nuxt-link hash="#contact" @click="$scrollTo('#contact')">Contact Us</nuxt-link></li>

<li>
  <button ref="scrollToTop" @click="$scrollToTop" class="scroll-top-button">
  <ScrollToTop class="fill-white w-4"/>
  </button>
</li>
        </ul>
      </div>

    </nav>
    <LayoutMobilNav/>
    <div  ref="navbar" class="nav-bg h-24 lg:h-36  bg-[url('/bg.png')] filter-dark "></div>
  </header>
</template>



<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "~/components/atoms/ScrollToTop.vue";
const {$scrollToTop , $scrollTo }  = useNuxtApp()

const navbar = ref()
const menu = ref()
const image = ref()
const scrollToTop = ref()


onMounted(()=> {



  gsap.registerPlugin(ScrollTrigger);

  gsap.to(navbar.value, {
    opacity : 0,
  })
  gsap.to(scrollToTop.value, {
    opacity : 0,
    xPercent: 200,

  })


  gsap.set(image.value, {
    yPercent : 0
  })

  const tl = gsap.timeline({
    scrollTrigger : {
      start : 'top+=50',
      end: 'top+=100',
      toggleActions: 'play none reverse none',
      scrub: 2
    }
  })

  tl.to(navbar.value, {
    opacity: 1,

  }).to(image.value, {
    yPercent:-15

  }).to(menu.value, {

    x: -50

  }).to(scrollToTop.value, {
    xPercent:0,
    opacity : 1,
    backgroundColor: '#006b00'
  })
})
</script>
<style scoped>

.nav-bg {

  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  z-index: -1;

}

</style>
