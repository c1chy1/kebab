<script setup lang="ts">

import {useUserStore} from "~/store/userStore";

const user = useUserStore()
</script>

<template >

  <div id="register"
       class="  relative  w-full mx-auto flex flex-col items-center justify-center pt-28  lg:pt-44 pb-32
       z-20

">
<div class="bg-[url('/images/register/register-left.png')]
bg-no-repeat bg-contain overflow-hidden bg-left-top -left-12 md:-left-16 lg:-left-20 xl:-left-24 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-w-128 h-full absolute">

</div>

    <div class="text-center">
      <h2 class="section-title">Log in</h2>
    </div>
  <FormKit
      type="form"
      submit-label="Log in"

      :submit-attrs="{
      inputClass: 'button-orange mx-auto ',
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
        placeholder="PASSWORD"
        wrapper-class="$reset block"
        overlay-placeholder-class="text-[#3d3d3d]"
        label-class="form-label"
        input-class="$reset authInput form-input"
        inner-class="$reset"
        validation="required|alphanumeric|length:6,16"
        value="test12"
    />
  </FormKit>
    <div class="text-center z-20">
      <h5 class=" py-2 font-bebas text-4xl text-primary tracking-widest y">Register</h5>
      <h2 class="section-title">Create Your Account</h2>
    </div>
    <nuxt-link class="button-orange z-20" to="/register">REGISTER</nuxt-link>
    <div class="bg-[url('/images/register/register-right.png')] overflow-hidden
bg-contain bg-no-repeat  bg-right-bottom   right-0 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-w-128 h-full absolute z-10">


    </div>
  </div>
</template>
