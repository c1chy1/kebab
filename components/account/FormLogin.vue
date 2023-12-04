<script setup lang="ts">

import {useUserStore} from "~/store/userStore";


useHead({
  title: 'Log In',
})
const user = useUserStore()
</script>

<template >
  <nuxt-link class="text-6xl" to="/register">REGISTER</nuxt-link>
  <FormKit
      type="form"
      submit-label="Log in"
      :submit-attrs="{
      inputClass: 'w-full mt-6',
    }"
      @submit="user.login"
  >
    <FormKit
        type="text"
        name="email"
        label="E-Mail"
        wrapper-class="$reset block"
        input-class="$reset authInput"
        inner-class="$reset"
        label-class="mt-3 mb-1"
        validation="required|email|"
        validation-visibility="live"
        value="cichy08081987pp@gmail.com"
    />
    <FormKit
        type="password"
        name="password"
        label="Password"
        wrapper-class="$reset block"
        input-class="$reset authInput"
        inner-class="$reset"
        label-class="mb-1"
        validation="required|alphanumeric|length:6,16"
        value="test12"
    />
  </FormKit>
</template>