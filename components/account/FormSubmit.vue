<script setup lang="ts">

import {useUserStore} from "~/store/userStore";

const user = useUserStore()
</script>

<template >
  <div class="w-full mx-auto flex justify-center">

  <FormKit
      type="form"
      submit-label="Register"
      :submit-attrs="{
      inputClass: 'button-orange flex justify-center mx-auto',

    }"
      @submit="user.register"
      #default="{ value }"
  >
    <nuxt-link to="/" class="button-orange w-full">BACK</nuxt-link>
    <h1 class="font-bold py-3 text-primary text-4xl uppercase transition-all duration-500">Register!</h1>
    <hr />
    <FormKit

        type="text"
        name="username"
        label="Your name"
        wrapper-class="$reset block"
        label-class="form-label"
        input-class="$reset form-input"
        inner-class="$reset"
        placeholder="Jane Doe"
        help="What do people call you?"
        validation="required"
    />
    <FormKit
        type="text"
        name="email"
        label="Your email"
        wrapper-class="$reset block"
        label-class="form-label"
        input-class="$reset form-input"
        inner-class="$reset"
        placeholder="jane@example.com"
        help="What email should we use?"
        validation="required|email"
    />

    <FormKit
        type="password"
        name="password"
        label="Password"
        wrapper-class="$reset block"
        label-class="form-label"
        input-class="$reset form-input"
        inner-class="$reset"
        validation="required|length:6|matches:/[^a-zA-Z]/"
        :validation-messages="{
          matches: 'Please include at least one symbol',
        }"
        placeholder="Your password"
        help="Choose a password"
    />
<!--    <pre wrap>{{ value }}</pre>-->
  </FormKit>
  </div>

</template>