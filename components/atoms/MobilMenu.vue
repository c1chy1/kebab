<template>
  <div>
    <button @click="toggleMenu" class=" md:hidden fixed right-2  top-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 z-[1000]">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>

    <transition
        name="slide-fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
    >
      <div v-if="isOpen" class="fixed inset-0  bg-opacity-75" @click="closeMenu"></div>
    </transition>

    <transition
        name="slide-fade"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
    >
      <div v-if="isOpen" class=" pl-3  fixed inset-y-0 left-0 z-50 w-full bg-accent overflow-y-auto">
        <!-- Your menu items go here -->


        <div class="flex py-4 font-mont text-primary ">
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
        <ul class="py-4 space-y-5">
          <li><nuxt-link hash="#header" @click="$scrollTo('#header');toggleMenu()" >Home</nuxt-link></li>
          <li><nuxt-link hash="#menu" @click="$scrollTo('#menu');toggleMenu()"  >Menu</nuxt-link></li>
          <li><nuxt-link hash="#events" @click="$scrollTo('#events');toggleMenu()">Events</nuxt-link></li>
          <li><nuxt-link hash="#reservation" @click="$scrollTo('#reservation');toggleMenu()">Reservation</nuxt-link></li>
          <li><nuxt-link hash="#gallery" @click="$scrollTo('#gallery');toggleMenu()">Gallery</nuxt-link></li>
          <li><nuxt-link hash="#contact" @click="$scrollTo('#contact');toggleMenu() ">Contact Us</nuxt-link></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },


    closeMenu() {
      this.isOpen = false;
    },
    beforeEnter(el) {
      el.style.transform = 'translateX(-100%)';
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transition = 'transform 0.5s';
      el.style.transform = 'translateX(0)';
      done();
    },
    leave(el, done) {
      el.style.transition = 'transform 0.5s';
      el.style.transform = 'translateX(-100%)';
      done();
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}
</style>