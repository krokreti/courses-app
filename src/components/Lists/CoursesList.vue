<template>
    <div class="courses-list">
      <SelectCategory @filterData="filterData"/>    
        <h3 style="margin-bottom: 2em;">Last Updated Courses</h3>
        <div  v-for="(course, index) in courses" :key="index" class="container-course">
          <CourseItem :course="course" />
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { Course } from '../models/Course'
import { getCourses } from '../../api/api'

import CourseItem from '../Courses/CourseItem.vue';
import SelectCategory from '../SelectorCategory/SelectCategory.vue';

import { plainToClass } from 'class-transformer';
import _ from 'lodash'

export default defineComponent({
  data() {
    return {
      courses: [] as Array<Course>,
      coursesFetched: [] as Array<Course>,
      curso: null as Course | null,
    }
  },
  components: {
    CourseItem,
    SelectCategory,
  },
  methods: {
    getCourses() {
        getCourses().then(data => {
            const listCourses: Course[] = plainToClass(Course, data);
            this.coursesFetched = listCourses;
            this.courses = listCourses;
            console.log(this.courses)
        }).catch(error => {
          console.error(error)
        })
    },
    filterData(event: string) {
      if(event==='all') {
        this.courses = this.coursesFetched;  
      } else {
        this.courses = this.coursesFetched;
        this.courses = _.filter(this.courses, (o) => {
          return o.tipo==event
        })
      }
    }

  },
  created() {
    this.getCourses();
  },
})
</script>

<style>
.courses-list {
    padding: 0 2em;
    width: 100%;
}

.container-course{
  background-color: white;
  padding: 0.5em;
  border-radius: 2em;
  margin-bottom: 2em;
}

@media (min-width: 700px) {
  .courses-list {
    max-width: 50em;
  }
}
</style>