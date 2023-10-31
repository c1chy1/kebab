<template>

  <div class="overflow-hidden">


    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

import Login from "~/pages/login.vue";
import Register from "~/pages/register.vue";

const { logout } = new useAuth()
</script>
