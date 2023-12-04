<script setup lang="ts">

import {useUserStore} from "~/store/userStore";

const user = useUserStore()
</script>

<template >
  <div class="w-full flex justify-center">

  <FormKit
      type="form"
      submit-label="Log in"
      class=""

      :submit-attrs="{
      inputClass: 'w-full mt-6 bg-[#ff6d00] hover:bg-primary border-none uppercase text-[17px] font-medium text-white transition-all ease-out duration-300  font-alfa inline-block py-4 px-10 ',
    }"
      @submit="user.login"
  >

    <nuxt-link class="w-full mt-6 bg-[#ff6d00] rounded-[12px]  hover:bg-primary border-none uppercase text-center text-[17px] font-medium text-white transition-all ease-out duration-300  font-alfa inline-block py-4 px-10 " to="/register">REGISTER</nuxt-link>
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