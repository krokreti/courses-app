<template>
  <div class="back-button-container" >
    <button class="btn-rounded" @click="goBack">
        <i class="fa-solid fa-chevron-left"></i>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import router from '@/router';

export default defineComponent({
  methods: {
    goBack() {
        router.back();
    }
  },
})
</script>

<style>
    .back-button-container {
        padding: 0 2em;
    }
</style>