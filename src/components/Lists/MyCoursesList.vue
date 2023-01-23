<template>
  <div class="courses-container">
    <div class="courses-list" >
          <MyCoursesItem/>
    </div>
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
.courses-container {
  display: flex;
  justify-content: center;
}
</style>