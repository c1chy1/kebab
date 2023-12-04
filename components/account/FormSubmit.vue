<script setup lang="ts">

import {useUserStore} from "~/store/userStore";

const user = useUserStore()
</script>

<template >
  <FormKit
      type="form"
      id="registration-example"
      submit-label="Register"
      :submit-attrs="{
      inputClass: ' w-full mt-6 bg-[#ff6d00] rounded hover:bg-primary border-none uppercase text-[17px] font-medium text-white transition-all ease-out duration-300  font-alfa inline-block py-4 px-10 ',
    }"
      @submit="user.register"
      :actions="false"
      #default="{ value }"
  >
    <h1>Register!</h1>
    <p>
      You can put any type of element inside a form, not just FormKit inputs
      (although only FormKit inputs are included with the submission).
    </p>
    <hr />
    <FormKit

        type="text"
        name="username"
        label="Your name"
        placeholder="Jane Doe"
        help="What do people call you?"
        validation="required"
    />
    <FormKit
        type="text"
        name="email"
        label="Your email"
        placeholder="jane@example.com"
        help="What email should we use?"
        validation="required|email"
    />

    <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required|length:6|matches:/[^a-zA-Z]/"
        :validation-messages="{
          matches: 'Please include at least one symbol',
        }"
        placeholder="Your password"
        help="Choose a password"
    />
    <!--        <FormKit
                type="password"
                name="password_confirm"
                label="Confirm password"
                placeholder="Confirm password"
                validation="required|confirm"
                help="Confirm your password"
            />-->

    <FormKit
        type="submit"
        label="Register"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>


</template>