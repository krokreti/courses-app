<template>
  <Appbar/>
  <router-view/>
</template>

<script lang="ts">
import Appbar from './components/layout/Appbar.vue'

export default {
 components: {
  Appbar,
 } 
}
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: sans-serif;
  background-color: #f6faf2;
}
</style>
