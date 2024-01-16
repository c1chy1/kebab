<template>
  <nav class="lg:hidden z-100">
    <div @click="toggle()"
         :class="open ? 'open' : ''"
         class=" w-6 h-4 sm:w-7 md:w-8 md:h-8 top-8 right-8 absolute"
         id="hamburger" >
      <span class="top-1  bg-[#3d2514]"></span>
      <span class="top-3  bg-[#3d2514]"></span>
      <span class="top-5  bg-[#3d2514]"></span>
    </div>

    <div ref="menu" class="  menu-mobile right-0 top-0 cursor-pointer font-mont" id="menu-mobile">
      <div ref="bgMenu" class=" h-screen px-4 bg-menu-mobile bg-accent" id="bg-menu-mobile">

        <div class="flex py-4 text-primary ">
          <AtomsLogo
              color="Green"
              text-size="text-3xl md:text-4xl"
              svg-size=" w-14 md:w-16"
              src="/logo.png"
              class="space-x-8"
          />
          <div class="flex flex-col">
            <span class="text-[15px]">Call for Delivery</span>
            <a href="#"
               class="font-bold text-[19px] -tracking-tighter"
               target="_blank">+4 450 68 7474</a>
          </div>
        </div>
        <ul class="space-y-3 w-full fixed">
          <li><nuxt-link hash="#header" @click="toggle();$scrollTo('#header')" >Home</nuxt-link></li>
          <li><nuxt-link hash="#menu" @click="toggle();$scrollTo('#menu')"  >Menu</nuxt-link></li>
          <li><nuxt-link hash="#events" @click="toggle();$scrollTo('#events')">Events</nuxt-link></li>
          <li><nuxt-link hash="#reservation" @click="toggle();$scrollTo('#reservation')">Reservation</nuxt-link></li>
          <li><nuxt-link hash="#gallery" @click="toggle();$scrollTo('#gallery')">Gallery</nuxt-link></li>
          <li><nuxt-link hash="#contact" @click="toggle();$scrollTo('#contact')">Contact Us</nuxt-link></li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script setup lang="ts">

import {gsap} from 'gsap'
const {$scrollTo}  = useNuxtApp()

let open = ref(false)

let estado = 0
const width = ref()

function toggle() {

        open.value = !open.value


  if (process.client) {

    width.value = window.innerWidth

  }
  if (estado === 0) {
    gsap.to('.bg-menu-mobile', 0.7, {
      x:-width.value,

      ease: "expo.easeInOut"
    });

    console.log(width.value)


    gsap.to('.menu-mobile li', 1.2, {
      x:-width.value,
      scaleX: 1,
      duration: 0.5,
      delay : 0.2,
      stagger: 0.04,
      ease: "Expo.easeInOut"
    });

    estado = 1;
  } else {
    estado = 0;
    gsap.to('.bg-menu-mobile', 1.2, {
          x: 0,
          delay: 0.2,
          ease: "Expo.easeInOut"
        }
    );

    gsap.to('.menu-mobile li', 0.7, {
          x: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "expo.easeInOut"
        },
    );
  }}






</script>

<style scoped>



#bg-menu-mobile {
  width: 100%;
  position: fixed;
  top: 0;
  right: -100%;
  will-change: transform;
}

ul {
  top: 100px;
  list-style: none;
  z-index:3;
}

ul li {

  position: relative;
  left:100%;
  cursor: pointer;
  will-change: transform;
}

/* hang burger */

#hamburger {
  cursor: pointer;

  background-color: transparent;
}

#hamburger:hover span:nth-child(1) {
  -webkit-transition: .20s ease-in-out;
  -moz-transition: .20s ease-in-out;
  -o-transition: .20s ease-in-out;
  transition: .20s ease-in-out;
}

#hamburger:hover span:nth-child(3) {
  -webkit-transition: .16s ease-in-out;
  -moz-transition: .16s ease-in-out;
  -o-transition: .16s ease-in-out;
  transition: .16s ease-in-out;
}

#hamburger span {
  z-index: 3;
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 5px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .20s ease-in-out;
  -moz-transition: .20s ease-in-out;
  -o-transition: .20s ease-in-out;
  transition: .25s ease-in-out;
}


#hamburger.open span:nth-child(1) {
  top: 14px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -30px;
  -webkit-transition: .16s ease-in-out;
  -moz-transition: .16s ease-in-out;
  -o-transition: .16s ease-in-out;
  transition: .16s ease-in-out;
}

#hamburger.open span:nth-child(3) {
  top: 14px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>