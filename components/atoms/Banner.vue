
<template>
<article class="relative  w-full overflow-hidden rounded-xl">
<div class="absolute top-0 left-0 text-white ml-3 mt-2 lg:ml-8 lg:mt-7 z-[1]">
  <h4 class=" text-sm sm:text-xl lg:text-[25px] font-medium font-bebas leading-normal">{{subject}}</h4>
  <h3 class=" text-xl sm:text-4xl lg:text-[42px] font-medium" >{{ title }}</h3>

</div>

        <nuxt-img
            loading="lazy"
            format="webp"
            :src="src"
             class="
             w-full
             hover:scale-105
             transition
             duration-500
             cursor-pointer
             object-cover"/>
</article>



</template>
<script setup lang="ts">

defineProps({
  subject: String,
  title: String,
  src : String
})

</script>

<style scoped>

</style>