<template>
  <button
      @click="$scrollToTop"
      class="btn-ghost  px-2 py-1 lg:px-4 lg:py-2 flex items-center font-bold font-bebas uppercase transition-all duration-500 rounded-[8px] cursor-pointer"
      :class="buttonClasses">
    <img   :src="src" class=" mr-4 stroke-current">
    <span class="text-4xl lg:text-5xl 2xl:text-6xl">
      {{props.label}}</span>
  </button>
</template>


<script setup lang="ts">
const {$scrollToTop}  = useNuxtApp()

const props = withDefaults(
    defineProps<{
      label: string;
      color?: 'Green' | 'White',
      src: String
    }>(),
    {
      color: 'Green',

    }
);

const buttonClasses = computed(() => {
  switch (props.color) {
    case 'White':
      return 'text-white';
    case 'Green':
      return 'text-primary';

    default:
      return 'Green';
  }

});
</script>
