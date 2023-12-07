
<template>
<article class="relative md:h-[50%-35px] mt-[35px] overflow-hidden">
<div class="absolute top-0 left-0 text-white ml-8 mt-7 z-[1]">
  <h4 class="text-[25px] font-medium font-bebas leading-normal">{{subject}}</h4>
  <h3 class="text-[42px] font-medium" >{{ title }}</h3>

</div>

        <img :src="src"
             class="
             hover:scale-110
             transition
             duration-500
             cursor-pointer
             object-cover">

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