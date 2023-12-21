<template>
  <button
      @click="$scrollToTop"
      class="button-logo"
      :class="buttonClasses">
    <img   :src="src" class=" w-14  lg:w-16 mr-4 stroke-current">
    <span class="text-3xl lg:text-4xl">
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
