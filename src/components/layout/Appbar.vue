<template>
  <div class="appbar">
    <div style="display: flex;" >
      <div class="appbar-button" @click="openMenu" >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
      </div> 
      <span class="appbar-username"> Hey, Davi 👋 </span>  
    </div>  
    <div class="appbar-img-profile" >
      <img src="../../assets/unknown-profile.jpg" class="appbar-img-profile-class" alt="Profile-Picture">
    </div>
  </div>
  <Menu :showMenu="showMenu" @close="closeMenu"/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import User from '../models/User'
import Menu from './Menu.vue';


export default defineComponent({
  data() {
    return {
      usuario: null as User | null,
      showMenu: false,
    }
  },
  components: {
    Menu,
  },
  methods: {
    closeMenu() {
      this.showMenu=false;
    },
    openMenu() {
      this.showMenu = !this.showMenu;
    }
  },
})
</script>

<style>
.appbar {
    height: 6em;
    padding: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.appbar-username {
    margin-left:1em;
    font-weight: bold; 
    display:flex; 
    align-items:center;
}

.appbar-img-profile {
  display: flex;
  justify-content: center;
  align-items: center;
}

.appbar-img-profile-class {
  display: inline-block;
  border-radius: 50%;
  height: 2.5em;
  width: 2.5em;
  object-fit: cover;
  border: 3px solid transparent;
}

.appbar-button {
    display: inline-block;
    cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}
</style>