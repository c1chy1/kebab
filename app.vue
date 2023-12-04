<template>

  <div class="overflow-hidden">


<!--    <LayoutNavigation/>

    <LayoutHeader/>
-->

        <NuxtLayout >
          <NuxtPage />
        </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/userStore";
const user = useUserStore()

/*await user.getUser()*/

</script>
