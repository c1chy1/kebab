<script setup lang="ts">
import {useUserStore} from "~/store/userStore";

const user = useUserStore()

const props = defineProps(
    {
      label: String,
      labelHover: String
    }
)


</script>

<template>
  <div class="text-center z-20"
       :class="!user.isLoggedIn ? 'h-auto' : 'h-[35rem]'"

       id="register">
    <h2 class="section-title pt-12">Create Your Account</h2>
    <button
        class="button-orange z-20 transition-all "
        :class="user.isLoggedIn ? 'cursor-not-allowed' : ''"
        :disabled="user.isLoggedIn" onclick="register_modal.showModal()">
      <span v-if="!user.isLoggedIn"> Register</span>
      <span v-else>Logged In</span>
    </button>
    <dialog v-if="!user.isLoggedIn" id="register_modal" class="modal">
      <div class="modal-box">
        <div class="w-full mx-auto flex justify-center">

          <FormKit
              type="form"
              submit-label="Register"
              :submit-attrs="{
      inputClass: 'button-orange flex justify-center mx-auto'}"
              @submit="user.register"
              #default="{ value }"
          >

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
          </FormKit>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button  class="button-orange w-full">Back</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>


</template>

<style scoped>

</style>