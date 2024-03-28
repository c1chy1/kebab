<script setup lang="ts">
import {useUserStore} from "~/store/userStore";

const user = useUserStore()


</script>

<template>

  <div
      class="relative w-full mx-auto flex flex-col items-center justify-center pt-28  lg:pt-32 pb-16
      ">

    <div class="bg-[url('/images/register/register-left.png')]
bg-no-repeat bg-contain overflow-hidden bg-left-top h-sc -left-12 md:-left-16 lg:-left-20 xl:-left-24 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-w-128 h-full absolute">
    </div>

    <div class="text-center " >
      <h2 class="section-title">Log in</h2>
      <button v-if="!user.isLoggedIn" class="button-orange  transition-all"
              onclick="login_modal.showModal()">
        Log In
      </button>
      <dialog v-if="!user.isLoggedIn" id="login_modal" class="modal">
        <div class="modal-box">
          <div class="w-full mx-auto flex justify-center">

            <FormKit
                type="form"
                submit-label="Log in"

                :submit-attrs="{
      inputClass: 'button-orange mx-auto ',
    }"
                @submit="user.login"
            ><FormKit
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

  </div>



</template>

<style scoped>

</style>