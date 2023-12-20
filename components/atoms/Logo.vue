<template>
  <button class="btn-ghost font-bold font-bebas  text-4xl uppercase transition-all duration-500"
          :class="buttonClasses">
    <img   :src="src" class="inline-block w-14 h-14 mr-4 stroke-current">{{props.label}}
  </button>
</template>


<script setup lang="ts">

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
