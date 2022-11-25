<template>
  <div class="courses-list">
    <MyCoursesItem/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MyCoursesItem from '../Courses/MyCoursesItem.vue';

export default defineComponent({
    name: 'MyCourses',
    data() {
      return {
        coursesList: null,
      }
    },
    components: {
      MyCoursesItem,
    },
    created() {
      
    },
})
</script>

<style>

</style>