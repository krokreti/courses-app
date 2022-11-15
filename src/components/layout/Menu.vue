<template>
    <div class="menu-background" v-if="showMenu" @click="$emit('close')"></div>
    <transition name="master">
        <div class="menu" style="padding:1em;" v-if="showMenu">
            <div class="menu-header">
                <div>
                    <h3>Courses App</h3>
                </div>
            </div>
            <hr>
            <div class="menu-content" style="margin-top:1em;">
                <router-link to="/" @click="$emit('close')">
                    <div class="menu-content-button">
                        <i class="fa-solid fa-house" style="margin-right:1em;"></i>
                        <span> Home </span>
                    </div>
                </router-link>
                <router-link to="/my-courses" @click="$emit('close')">
                    <div class="menu-content-button">
                        <i class="fa-sharp fa-solid fa-graduation-cap" style="margin-right:1em;"></i>
                        <span class="font-bold"> My Courses </span>
                    </div>
                </router-link>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    props: {
        showMenu: Boolean
    }
})
</script>

<style>
.menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 75%;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.4);
    /* background-image: linear-gradient(to right, rgba(184, 201, 207, 1), rgba(246, 250, 242, 1)); */
    /* background-color: #bc46f9; */
    background-color: #214f77;
    color: white;
    z-index: 2;
}

.master-enter-active {
    animation: enter 0.3s ease-out;
}

.master-leave-active {
    animation: enter 0.3s ease-in reverse;
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateX(-500px) scale(1);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

.menu-background {
  position: fixed; 
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;
}

.menu-content-button {
    display: flex;
    justify-content: flex-start;
    padding: 1em;
    color: white;
}

@media (min-width: 700px) {
    .menu {
        width: 40%;
    }
}
</style>

<style scoped>
a {
    text-decoration: none;
}
</style>