<template>
    <div class="home-container">
      <CoursesList/>
    </div>
</template>

<script lang="ts">
import CoursesList from '@/components/Lists/CoursesList.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  components: {
    CoursesList,    
  },
})
</script>

<style>
.home-container {
  display: flex;
  justify-content: center;
}
</style>