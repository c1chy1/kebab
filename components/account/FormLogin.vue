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

    <nuxt-link class="button-orange" to="/register">REGISTER</nuxt-link>
    <FormKit
        type="text"
        name="email"
        label="E-Mail"
        placeholder="E-MAIL"
        wrapper-class="$reset block"
        class="shadow-none text-[#3d3d3d] h-[65px] text-[21px] font-bebas border-[#ced4da] border-1"
        overlay-placeholder-class="text-[#3d3d3d]"
        input-class="$reset authInput  input join-item shadow-none text-[#3d3d3d] h-[65px] text-[21px] font-bebas border-[#ced4da] border-1 "
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
        input-class="$reset authInput  input join-item shadow-none text-[#3d3d3d] h-[65px] text-[21px] font-bebas border-[#ced4da] border-1 "
        inner-class="$reset"
        label-class="mb-1"
        validation="required|alphanumeric|length:6,16"
        value="test12"
    />
  </FormKit>
  </div>
</template>