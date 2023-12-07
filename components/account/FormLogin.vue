<script setup lang="ts">

import {useUserStore} from "~/store/userStore";

const user = useUserStore()
</script>

<template >
  <div class="w-full mx-auto flex justify-center">
  <FormKit
      type="form"
      submit-label="Log in"

      :submit-attrs="{
      inputClass: 'button-orange w-full flex justify-center mx-auto',
    }"
      @submit="user.login"
  >


    <FormKit
        type="text"
        name="email"
        label="E-Mail"
        placeholder="E-MAIL"
        wrapper-class="$reset block"
        overlay-placeholder-class="text-[#3d3d3d]"
        label-class="form-label"
        input-class="$reset form-input"
        inner-class="$reset"
        validation="required|email|"
        validation-visibility="live"
        value="cichy08081987pp@gmail.com"
    />
    <FormKit
        type="password"
        name="password"
        label="Password"
        wrapper-class="$reset block"
        overlay-placeholder-class="text-[#3d3d3d]"
        label-class="form-label"
        input-class="$reset authInput form-input"
        inner-class="$reset"
        validation="required|alphanumeric|length:6,16"
        value="test12"
    />
    <nuxt-link class="button-orange w-full" to="/register">REGISTER</nuxt-link>
  </FormKit>
  </div>
</template>
