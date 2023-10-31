<template>


  <button class="nav-element-wrapper px-4" @click="logout">

    <p class="text-5xl mt-4 text-white py-4 px-6 hover:bg-[#80808033] transition-all duration-300 cursor-pointer rounded-md">
      Logout
    </p>

  </button>
</template>

<script setup lang="ts">
/*

import {useUsers} from '@/store/getUsers'
*/


const { logout } = new useAuth()

/*
const { update: updateUser, get: getUser } = new useUser()
*/



/*console.log(useUsers().getUsers())*/

const user: any = useState("user")


</script>