import { createRouter, createWebHistory } from "vue-router";
import TaskList from '@/components/TaskList.vue';
import TaskDetail from '@/components/TaskDetails.vue';
import TaskForm from '@/components/TaskForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/tasks",
      name: "tasks",
      component: TaskList,
    },
    {
      path: "/",
      alias: "/tasks/new",
      name: "task-new",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TaskForm,
    },
    {
      path: "/",
      alias: "/tasks/:id",
      name: "task-details",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TaskDetail,
    },
    
  ],
});

export default router;
