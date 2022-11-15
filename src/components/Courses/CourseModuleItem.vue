<template>
    <div class="course-module-grid">
        <div class="course-module-grid-image" >
            <img :src="require(`@/assets/courses-modules/${courseModule.module_image}`)" alt="Module-Image" class="course-module-image">
        </div>
        <div class="course-module-grid-row" >
            <div class="course-module-grid-flex">
                <div>
                    <h4>{{ courseModule.module_name }}</h4>
                    <p style="color: gray;">{{ courseModule.module_description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {CourseModule} from '../models/CourseModule';
import {defineComponent, PropType} from 'vue';

export default defineComponent({
  props: {
    courseModule: Object as PropType<CourseModule>,
  },
})
</script>

<style>
.course-module-grid {
    display: grid;
    grid-template-columns: 25% 75%;
}

.course-module-grid-image {
    grid-row: 1/3;
}

.course-module-image {
    width: 5em;
    border-radius: 20px;
}

.course-module-grid-row{
    grid-row: 1/3;
}

.course-module-grid-flex {
    height: 100%; 
    display: flex; 
    align-items: center;
}

</style>