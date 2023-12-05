
<template>







  <header class=" fixed z-10 w-full  " >
    <nav ref="image" class="navbar absolute top-0 left-0 w-full h-[105px] md:h-[136px] z-[0]
bg-repeat-round  px-4 md:px-12  font-bebas">
      <div  class="navbar-start flex-row w-full md:w-1/3 py-4 ">
        <button class="btn-ghost font-bold  text-primary text-4xl uppercase transition-all duration-500">

          <img   src="/logo.png" class="inline-block w-14 h-14 mr-4 stroke-current ">Burger House
        </button>


      </div>
      <div class="navbar-end hidden lg:flex items-end flex-col w-full text-primary ">
        <div class="flex items-center space-x-5 pt-6 ">
          <img class="animate-shake delay-500" src="/delivery-icon.png" >
          <h2 class="text-base text-center font-semibold font-mont py-5 tracking-wider transition-all duration-500"  >Call for Delivery +4 450 68 7474</h2>
        </div>
        <ul class="menu menu-horizontal gap-4 px-1 text-[25px] tracking-[4px] uppercase transition-all duration-500">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><a>Menu</a></li>
          <li><a>Events</a></li>
          <li><a>Reservation</a></li>
          <li><a>Gallery</a></li>
          <li><a>Contact Us</a></li>
          <li>      <button class="btn-ghost btn-circle btn" @click="themeStore.toggle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="24px"
                height="24px"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button></li>
        </ul>
      </div>
    </nav>

    <div  ref="navbar" class=" nav-bg bg-[url('/bg.png')] filter-dark "></div>
  </header>
</template>



<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {useThemeStore} from "~/store/useTheme";

const themeStore = useThemeStore()
const navbar = ref()
const image = ref()


onMounted(()=> {

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(navbar.value, {
    opacity : 0,
  })

  gsap.set(image.value, {
    yPercent : 0
  })

  const tl = gsap.timeline({
    scrollTrigger : {
      start : 'top+=50',
      end: 'top+=100',
      toggleActions: 'play none reverse none',
      scrub: 3
    }
  })

  tl.to(navbar.value, {
    opacity: 1,

  }).to(image.value, {
    yPercent:-15

  }).to('.cta', {
    x: -50
  })
})




console.log(gsap)
console.log(ScrollTrigger)
</script>
<style scoped>

.nav-bg {

  position: absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 136px;
  z-index: -1;

}

a.cta {

  background: white;
  padding: .5em .8em;

}

</style>
