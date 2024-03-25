<script setup lang="ts">

import {useUserStore} from "~/store/userStore";

definePageMeta
({
  middleware
      : ["auth"]
})


useHead({
  title: 'Kebab',
})
const user = useUserStore()

console.log(user.isLoggedIn)
</script>

<template >

  <AccountDashboard v-if="user.isLoggedIn"/>
  <LayoutNavigation/>
  <LayoutHeader/>
  <LayoutHome/>
  <LayoutMenu/>
  <LayoutEvents/>
  <LayoutGallery/>
  <AccountRegister/>
  <AccountLogin/>
  <AccountFormLogin v-if="!user.isLoggedIn"/>
  <LayoutFooter/>


</template>