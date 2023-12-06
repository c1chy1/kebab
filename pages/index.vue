<script setup lang="ts">

import {useUserStore} from "~/store/userStore";


useHead({
  title: 'Kebab',
})
const user = useUserStore()
</script>

<template >


  <LayoutNavigation/>

  <LayoutHeader/>
<!--  <LayoutHome/>-->
  <AccountFormLogin/>
<section class="h-screen"></section>



</template>