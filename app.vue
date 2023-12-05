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
import { useUserStore } from "~/store/userStore";
import { THEMES, useThemeStore } from '~/store/useTheme'

const user = useUserStore()


const themeStore = useThemeStore()
/*await user.getUser()*/

</script>
