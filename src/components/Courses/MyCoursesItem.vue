<template>
  <div class="my-courses-container" >
    <div style="display: flex;">
        <div class="my-courses-container-image">
            <img src="../../assets/courses/calculator-course.jpg" alt="my-course-img" class="my-courses-container-image">
        </div>
        <div class="my-courses-container-description">
            <span class="font-bold">Título</span>
            <div style="color: gray;">
                Texto teste
            </div>
        </div>
    </div>
    <div class="my-courses-container-progress" >
        <div style="display: flex; justify-content: space-between;">
            <span class="font-bold">Progress</span>
            
        </div>
        <div class="my-courses-container-progress-div" >
            
            <div class="my-courses-container-progress-bar bg-secondary" style="width: 70%"></div>
            <span class="text-secondary font-bold">70%</span>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Course} from '../models/Course';

export default defineComponent({
    name: 'MyCoursesItem',
    props: {
        course: Object as PropType<Course>,
    },
})
</script>

<style scoped>
.my-courses-container {
    display: flex;
    flex-direction: column;
}

.my-courses-container-image {
    width: 5em;
    height: 5em;
    object-fit: cover;
    border-radius: 1em;
}

.my-courses-container-description {
    display: flex;
    flex-direction: column;
    margin: auto 0.5em;
}

.my-courses-container-progress {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
}

.my-courses-container-progress-div {
    height: 0.8em;
    border-radius: 2em;
    margin-top: 0.5em;
    display: flex;
    justify-content: space-between;
}

.my-courses-container-progress-bar {
    height: 100%;
    border-radius: 2em;
}
</style>