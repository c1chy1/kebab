<template>
  <button
      @click="$scrollToTop"
      class="button-logo"
      :class="buttonClasses">
    <nuxt-img
        preload
        :src="src"
        format="webp"
        :class="svgSize"
        class="stroke-current">
    </nuxt-img>
    <span
    class="tracking-widest"
        :class="textSize">
      {{props.label}}</span>
  </button>
</template>


<script setup lang="ts">
const {$scrollToTop}  = useNuxtApp()

const props = withDefaults(
    defineProps<{
      label?: string;
      color?: 'Green' | 'White',
      textSize: string,
      svgSize: string
      src: string
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
