<template>

  <div
      :data-theme="themeStore.theme.dark ? THEMES.DARK : THEMES.LIGHT"
      :class="themeStore.theme.dark ? '' : 'background-dark'"
  >

        <NuxtLayout >
          <NuxtPage />
        </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { THEMES, useThemeStore } from '~/store/useTheme'
const themeStore = useThemeStore()
import {useUserStore} from "~/store/userStore";
const user = useUserStore()

/*
onMounted(()=> {
  user.getToken()
})*/

</script>
