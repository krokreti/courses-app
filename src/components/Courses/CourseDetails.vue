<template>
  <BackButton/>
  <div style="display:flex; justify-content:center;">
      <div class="course-details-container">
          <h2>{{ course.name }}</h2>
          <div class="course-details-image" style="margin-top: 2em;">
              <img :src="require(`@/assets/courses/${course.bg_image}`)" alt="Course-Image" class="course-item-container-image">
          </div>
          <h2 style="margin-top: 1em;">Course Details</h2>

          <div v-for="(modulo, index) in course.course_modules" :key="index" class="course-details-module-container">
              <CourseModuleItem :courseModule="modulo" style="margin: 2em 0;"/>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import {Course} from '../models/Course';
import {defineComponent} from 'vue';
import {getDetailedCourse} from '../../api/api'
import CourseModuleItem from './CourseModuleItem.vue';
import BackButton from '../shared/BackButton.vue';

export default defineComponent({
  data() {
    return {
        course: null as Course | null,
    }
  },
  methods: {
    getCourseDetailed(id: number) {
        getDetailedCourse(id).then(data => {
            this.course = data;
        })
    }
  },
  components: {
    CourseModuleItem,
    BackButton,
  },
  created() {
    this.getCourseDetailed(+this.$route.params.id) //converting string to number
  },
})
</script>

<style>
.course-details-container {
    padding: 2em;
}

@media (min-width: 700px) {
    .course-details-container {
        max-width: 50em;
    }
}
</style>