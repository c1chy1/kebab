<script setup lang="ts">

import {useUserStore} from "~/store/userStore";


useHead({
  title: 'Log In',
})
const user = useUserStore()
</script>

<template >


  <LayoutNavigation/>

<LayoutHeader/>
  <AccountFormLogin/>
<section class="h-screen"></section>



</template>