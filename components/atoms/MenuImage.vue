<script setup lang="ts">

defineProps({

  src: String


})

</script>

<template>
  <nuxt-img
      sizes="100vw sm:50vw md:400px"
      loading="lazy"
      quality="40"
      format="webp"
      :src="src"
      class="z-10"/>
</template>

<style scoped>


</style>