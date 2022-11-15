import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import CourseDetails from '@/components/Courses/CourseDetails.vue'
import MyCoursesList from '@/components/Lists/MyCoursesList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/course-details/:id',
    name: 'CourseDetails',
    component: CourseDetails
  },
  {
    path: '/my-courses',
    name: 'MyCourses',
    component: MyCoursesList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
