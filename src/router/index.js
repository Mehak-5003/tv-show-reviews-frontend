import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import ShowDetails from '../views/ShowDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/show/:id',
    name: 'ShowDetails',
    component: ShowDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
