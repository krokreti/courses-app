<template>
  <div class="course-item-container" @click="openCourse(course.id)">
    <img :src="require(`@/assets/courses/${course.bg_image}`)" alt="Image-Profile" class="course-item-container-image">
    <div class="course-item-container-teacher">
        <div class="appbar-img-profile">
            <img :src="require(`@/assets/teachers/${course.teacher_image}`)" class="appbar-img-profile-class" alt="Profile-Picture">
        </div>
        <span class="text-secondary" style="margin-right:1em; margin-left: 0.5em;">{{ course.teacher }}</span>
    </div>
    <div class="course-item-container-price">
        <span class="font-bold">${{ course.price }}</span>
    </div>
  </div>
    <div class="course-item-container-title">
        <span class="font-bold">{{ course.name }}</span>
        <span class="text-secondary" style="font-weight: bold;">Start: {{ course.start_date }}</span>
    </div>
    <div class="course-item-container-text">
        {{ course.description }}
    </div>
</template>

<script lang="ts">
import {Course} from '../models/Course';
import {defineComponent, PropType} from 'vue';
import router from '@/router';

export default defineComponent({
  props: {
    course: Object as PropType<Course>,
  },
  methods: {
    openCourse(id: number) {
        router.push({name: 'CourseDetails', params: { id: `${id}`}})
    }
  },
})
</script>

<style>
.course-item-container {
    /* margin-top: 2rem; */
    position: relative;
    display: block;
    width: fit-content;
    cursor: pointer;
}

.course-item-container-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    margin-top: 1em;
}

.course-item-container-text {
    padding: 0 1em;
    margin-top: 1em;
    color: gray;
    width: 100%;
    margin-bottom: 1.5em;
}

.course-item-container-teacher {
    background: black;
    width: fit-content;
    padding: 0.2em;
    border-radius: 2em;
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    display: flex;
    align-items: center;
}

.course-item-container-price {
    background: white;
    width: fit-content;
    padding: 0.8em 1.8em;
    border-radius: 2em;
    color: black;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
}

.course-item-container-image {
    width: 100%;
    border-radius: 2em;
}

@media (min-width: 700px) {
    .course-item-container-image {
        height: 100%;
        width: 100%;
    }
}
</style>