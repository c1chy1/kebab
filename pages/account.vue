<template>
<section class="h-screen">

<div>{{store.userInfo}}


<h1 class="font-bold  text-primary text-4xl uppercase transition-all duration-500">User: {{store.userInfo.username}}</h1>
  <h2 class="font-bold  text-primary text-4xl uppercase transition-all duration-500">E-mail: {{store.userInfo.email}}</h2>
</div>





<!--  <nuxt-img :src="store.userInfo.profilePicture"></nuxt-img>
  <div>{{store.userInfo.profilePicture}}</div>-->
<div class="flex flex-col w-56">
  <nuxt-link to="/" class="button-orange">BACK</nuxt-link>
  <button @click="store.logout()" class="button-orange"> LOG OUT</button>
  <AtomsButtonTheme class="mx-auto mt-5"/>
</div>


</section>

</template>

<script setup lang="ts">
import { useUserStore } from "~/store/userStore";
import {useThemeStore} from "~/store/useTheme";

const themeStore = useThemeStore()
const store = useUserStore();

</script>