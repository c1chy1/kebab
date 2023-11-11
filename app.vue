<template>

  <div class="overflow-hidden">


    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/userStore";

const user = useUserStore()
await user.getUser()
</script>
