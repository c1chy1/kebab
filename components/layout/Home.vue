<script setup lang="ts">

</script>

<template>


  <div class="px-20 py-10    grid grid-cols-1  md:grid-cols-[0.6fr 0.5fr] md:grid-rows-2 justify-center items-center md:gap-x-12 md:gap-y-6">
    <div class="area ">
      <AtomsBanner
          src="images/home/1.png"
          subject="Try it today"
          title="Most popular kebab"
      />
    </div>
    <div class="area-2">
      <AtomsBanner
          src="images/home/2.png"
          subject="Try it today"
          title="More fun more taste"
      />
    </div>
    <div class="area-3">
      <AtomsBanner
          src="images/home/3.png"
          subject="Try it today"
          title="Fresh & Chili"
      />
    </div>
  </div>
</template>

<style scoped>

.area {
  grid-area: 1 / 1 / 3 / 2;
}

.area-2 {
  grid-area: 1 / 2 / 2 / 3;
}

.area-3 {
  grid-area: 2 / 2 / 3 / 3;
}


</style>