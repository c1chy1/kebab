

<template>



  <div
      v-show="user.isLoggedIn"
      class="sidebar fixed left-5 bottom-5 z-[100000000000] transition-all collapse bg-secondary"
       :class="active ? '' : 'active'"
       ref="sidebar">
    <div class="logo_content">
      <div class="logo" ref="logo">
        <div class="logo_name" style="text-transform: uppercase;"><b>Dashboard</b>
        </div>
      </div>
      <label tabindex="0" class="btn btn-ghost swap swap-rotate" @click.stop="">
        <input v-model="active" type="checkbox" @click="active = !active">
        <svg
            class="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
            class="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
        >
          <polygon
              points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
          />
        </svg>
      </label>
    </div>
    <ul class="nav_list" >
      <li v-for="link in links">
        <a>
          <i  class="w-6 h-6">
            <component :is="link.icon" as="svg"></component>
          </i>
          <span ref="linksName" class="links_name">{{link.name}}</span>
        </a>
        <span ref="tooltip" class="tooltip">{{link.name}}</span>
      </li>

    </ul>
    <AtomsButtonTheme class="mx-auto mt-5"/>
    <button @click="user.logout()" class="button-orange bg-primary"> LOG OUT</button>
  </div>


</template>
<script setup lang="ts">
import {useUserStore} from "~/store/userStore";
import {useThemeStore} from "~/store/useTheme";

import gsap from 'gsap'
import IconSettings from "~/components/atoms/dashboard/IconSettings.vue";
import IconUser from "~/components/atoms/dashboard/IconUser.vue";


const themeStore = useThemeStore()
const user = useUserStore();

let tl = gsap.timeline({
  paused: true,
  reversed: true
});




const links = [
  {name: user.userInfo.username ,
    email: user.userInfo.email,
   icon: IconUser,
    route: 'account',
    children: [
      {   title: "Widgets1", icon: 'send' ,   path: "/dashboard/widgets1",  active : true },
      { title: "Widgets2", icon: 'drafts',   path: "/dashboard/widgets2", },
      { title: "Widgets3", icon: 'settings',   path: "/dashboard/widgets3", },
    ],
  },

  {name: 'Settings',
    icon: IconSettings,
    route: 'login',
  }

]

const active = ref()

const btn = ref()
const sidebar = ref()
const tooltip = ref()
const linksName = ref()
const user2 = ref()
const user_details = ref()
const log_out = ref()
const logo = ref()
function open () {

  active.value = !active.value
  if (tl.reversed()) {
    console.warn('play?');
    tl.play();
  } else {
    console.warn('reverse?');
    tl.reverse(1);
  }

  // sidebar.classList.toggle("active");
}


tl.to(sidebar.value, {
  css: {width: 240}, // You can call `width: 240` direclty no need to wrap it in a css: {} obj. This counts for almost every property you want to animate with GSAP
  duration: 0.1
})

    .to(btn.value, {
      duration: 0.2, ease: "none",
      css: {
        x: 90 // Left is a less performatent property to animate beter is it to use x: or xPercent:
      }
    }, "")

    .to(
        tooltip.value,
        {
          css: {
            display: "none" // You cant animate display, it's either on or off. so you can use .set() for this instead of .to()
          }
        },
        "-=.2"
    )
    .to(
        linksName.value,
        {
          css: {
            transition: "0s",
            opacity: 1,
            pointerEvents: "auto"
          }
        },
        "-=.4"
    )
    .to(
        user2.value,
        {
          css: {
            background: "var(--light-black)"
          }
        },
        "-=.8"
    )

    .to(
        user_details.value,
        {
          css: {
            opacity: 1,
            pointerEvents: "auto"
          }
        },
        "-=.4"
    )
    .to(
        log_out.value,
        {
          css: {
            x: 80,
            background: "none"
          }
        },
        "-=.7"
    )
    .to(
        logo.value,
        {
          css: {
            opacity: 1,
            pointerEvents: "none"
          }
        },
        "-=.1"
    );


</script>
<style scoped>



.sidebar.active {
  width: 240px;
}

.sidebar .logo_content .logo {
  color: var(--white-color);
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  opacity: 0;
  pointer-events: none;
     transition:all 0.5s ease;
}

.sidebar.active .logo_content .logo {
  opacity: 1;
  pointer-events: none;
}

.logo_content .logo .logo_name {
  font-size: 20px;
  font-weight: 400;
}

.sidebar #btn {
  position: absolute;
  color: var(--white-color);
  top: 6px;
  left: 50%;
  font-size: 22px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  transform: translateX(-50%);
  cursor: pointer;
}

.sidebar.active #btn {
  left: 90%;
}

.sidebar ul {
  margin-top: 20px;
}

.sidebar ul li {
  position: relative;
  height: 50px;
  width: 100%;
  margin: 5px 0;
  list-style: none;
  line-height: 50px;
}

.sidebar ul li .tooltip {
  position: absolute;
  left: 125px;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  height: 35px;
  width: 120px;
  background: var(--white-color);
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  /*   transition:0s; */
  opacity: 0;
  pointer-events: none;
  display: block;
}

.sidebar ul li .tooltip::before {
  content: '';
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid var(--white-color);
  position: absolute;
  left: -8px;
  top: 7px;
}

.sidebar.active ul li .tooltip {
  display: none;
}

.sidebar ul li:hover .tooltip {
  /*   transition:all 0.5s ease; */
  opacity: 1;
  top: 50%;
}

.sidebar ul li input {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: #1e1e1e;
  padding-left: 50px;
  font-size: 18px;
  color: var(--white-color);
}

.sidebar ul li .bx-search {
  position: relative;
  z-index: 99;
  color: var(--white-color);
  font-size: 22px;
  /*   transition:all 0.5s ease; */
}

.sidebar ul li .bx-search:hover {
  background: var(--white-color);
  color: #1e1e1e;
}

.sidebar ul li a {
  color: var(--white-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 12px;
  white-space: nowrap;
  /*   transition:all 0.4s ease; */
}

.sidebar ul li a:hover {
  color: var(--black-color);
  background: var(--white-color);
}

.sidebar ul li i {
  font-size: 18px;
  font-weight: 400;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}

.sidebar .links_name {
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  pointer-events: none;
  /*   transition:all 0.3s ease; */
}

.sidebar.active .links_name {
  /*   transition:0s; */
  opacity: 1;
  pointer-events: auto;
}

.sidebar .content {
  position: absolute;
  color: var(--white-color);
  bottom: 0;
  left: 0;
  width: 100%;
}

.sidebar .content .user {
  position: relative;
  padding: 10px 6px;
  height: 60px;
  background: none;
  /*   transition:all 0.4s ease; */
}

.sidebar.active .content .user {
  background: var(--light-black);
}

.content .user .user_details {
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
  /*   transition:all 0.4s ease; */
}

.sidebar.active .user .user_details {
  opacity: 1;
  pointer-events: auto;
}

.content .user .user_details img {
  height: 45px;
  width: 45px;
  object-fit: cover;
  border-radius: 12px;
}

.name_job {
  margin-left: 10px;
}

.user_details .name {
  font-size: 15px;
  font-weight: 400;
}

.user_details .job {
  font-size: 12px;
}

#log_out {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 50px;
  line-height: 50px;
  font-size: 20px;
  border-radius: 12px;
  text-align: center;
  /*   transition:all 0.4s ease; */
}

.sidebar.active .user #log_out {
  left: 80%;
  background: none;
}

.home_content {
  position: absolute;
  height: 100%;
  width: calc(100% - 78px);
  left: 78px;
  background: var(--sky-color);
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  /*   transition:all 0.5s ease; */
}

.sidebar.active ~ .home_content {
  z-index: 100;
  width: calc(100% - 240px);
  left: 240px;
}

.home_content .text {
  font-size: 25px;
  font-weight: 600;
  color: var(--light-black);
  margin-bottom: 15px;
}

.home_content p {
  margin-bottom: 15px;
}


</style>