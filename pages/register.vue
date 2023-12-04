<template>
<FormSubmit/>
<!--    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>-->
  </template>

<script setup lang="ts">


import {useUserStore} from "~/store/userStore";
import FormSubmit from "~/components/account/FormSubmit.vue";


useHead({
  title: 'Sign Up',
})
const user = useUserStore()
</script>