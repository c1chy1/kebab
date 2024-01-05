

<template>
  <div id="gallery" class="">

    <h2 class="section-title   pt-32 pb-16">Gallery</h2>
    <div ref="gallery" class="max-w-sm sm:max-w-2xl px-4  md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  grid  sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2 mx-auto"

    >
      <a v-for="image in hamburgers"

          class="relative cursor-zoom-in img"
          :href="image.img"
      >
        <img
            :src="image.img"
            class="w-full "
        />
        <div
            class="absolute
          top-0
          left-0
          opacity-0
          flex
          justify-center
          items-center
          w-full
          h-full
          transition-all
          duration-1000
          bg-black/50
          hover:opacity-80
  hover:bg-primary/80
"

        >


           <AtomsButtonSearch class="transition-all duration-500 animate-bounce animate bottom-5"/>

        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

import Lightgallery from "lightgallery";

import 'lightgallery/scss/lightgallery.scss'
import 'lightgallery/scss/lg-zoom.scss'
const gallery = ref()

function lightGallery() {

  Lightgallery(gallery.value, gallerySettings)
}

onMounted(()=>{

  lightGallery()
})
const hamburgers = reactive([

  {
    img: 'images/gallery/1.png',
    title: 'Hamburger1',

  },
  {
    img: 'images/gallery/4.png',
    title: 'Hamburger2',

  },
  {
    img: 'images/gallery/2.png',
    title: 'Hamburger3',

  },
  {
    img: 'images/gallery/3.png',
    title: 'Hamburger4',

  },
  {
    img: 'images/gallery/4.png',
    title: 'Hamburger5',

  },
  {
    img: 'images/gallery/1.png',
    title: 'Hamburger6',
  }
  ,
  {
    img: 'images/gallery/3.png',
    title: 'Hamburger6',
  },
  {
    img: 'images/gallery/2.png',
    title: 'Hamburger6',
  }
])

const gallerySettings = {
  selector: '.img',
  speed: 500,
  download: false,
  counter: false,
  zoom: true
}
</script>

<style scoped>

</style>