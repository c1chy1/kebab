<script setup lang="ts">

import {useUserStore} from "~/store/userStore";


useHead({
  title: 'Kebab',
})
const user = useUserStore()
</script>

<template >

<!--  <AtomsMobilMenu2/>-->
  <LayoutNavigation/>
  <LayoutHeader/>
  <LayoutHome/>
  <LayoutMenu/>
  <LayoutEvents/>
  <LayoutGallery/>
  <AccountFormLogin/>
  <LayoutFooter/>




</template>