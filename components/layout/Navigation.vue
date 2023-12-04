
<template>







  <header class=" fixed z-10 w-full  " >
    <nav ref="image" class="navbar absolute top-0 left-0 w-full h-[105px] md:h-[136px] z-[0]
bg-repeat-round  px-4 md:px-12  font-bebas">
      <div  class="navbar-start flex-row w-full md:w-1/3 py-4 ">
        <button class="btn-ghost font-bold  text-primary text-4xl uppercase">

          <img   src="/logo.png" class="inline-block w-14 h-14 mr-4 stroke-current">Burger House
        </button>


      </div>
      <div class="navbar-end hidden lg:flex items-end flex-col w-full text-primary ">
        <div class="flex items-center space-x-5 pt-6 ">
          <img class="animate-shake delay-500" src="/delivery-icon.png" >
          <h2 class="text-base text-center font-semibold font-mont py-5 tracking-wider"  >Call for Delivery +4 450 68 7474</h2>
        </div>
        <ul class="menu menu-horizontal gap-4 px-1 text-[25px] tracking-[4px] uppercase">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><a>Menu</a></li>
          <li><a>Events</a></li>
          <li><a>Reservation</a></li>
          <li><a>Gallery</a></li>
          <li><a>Contact Us</a></li>
        </ul>
      </div>
    </nav>

    <div  ref="navbar" class=" nav-bg bg-[url('/bg.png')] "></div>
  </header>
</template>



<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navbar = ref()
const image = ref()


onMounted(()=> {

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(navbar.value, {
    opacity : 0
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
