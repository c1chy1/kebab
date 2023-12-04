<template>
<div>

  <h1>WIELKI CHUJ</h1>




<div>{{store.userInfo}}</div>

<!--  <nuxt-img :src="store.userInfo.profilePicture"></nuxt-img>
  <div>{{store.userInfo.profilePicture}}</div>-->

  <button @click="store.logout()"> LOG OUT</button>
</div>

</template>

<script setup lang="ts">



import { useUserStore } from "~/store/userStore";
const store = useUserStore();



</script>