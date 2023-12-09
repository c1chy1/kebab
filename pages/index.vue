<script setup lang="ts">

import {useUserStore} from "~/store/userStore";


useHead({
  title: 'Kebab',
})
const user = useUserStore()
</script>

<template >


  <LayoutNavigation/>


<!--  <LayoutSwiper/>-->
  <LayoutHeader/>
  <LayoutHome/>
  <LayoutMenu/>
  <AccountFormLogin/>
<section class="h-screen"></section>



</template>