<template>
<section v-if="user.isLoggedIn" class="fixed left-4 bottom-4 h-64 w-72">

<div>{{user.userInfo}}


<h1 class="font-bold  text-primary text-4xl uppercase transition-all duration-500">User: {{user.userInfo.username}}</h1>
  <h2 class="font-bold  text-primary text-4xl uppercase transition-all duration-500">E-mail: {{user.userInfo.email}}</h2>
</div>





<!--  <nuxt-img :src="store.userInfo.profilePicture"></nuxt-img>
  <div>{{store.userInfo.profilePicture}}</div>-->
<div class="flex flex-col w-56">
  <nuxt-link to="/" class="button-orange">BACK</nuxt-link>
  <button @click="user.logout()" class="button-orange"> LOG OUT</button>
  <AtomsButtonTheme class="mx-auto mt-5"/>
</div>


</section>

</template>

<script setup lang="ts">
import { useUserStore } from "~/store/userStore";
import {useThemeStore} from "~/store/useTheme";

const themeStore = useThemeStore()
const user = useUserStore();

</script>