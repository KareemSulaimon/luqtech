import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HomeApp.vue'

import AboutApp from "@/components/AboutApp.vue";
import FooterMap from "@/components/FooterMap.vue";
import ProjectApp from "@/components/MapView.vue";
import MainteNance from "@/components/MainteNance.vue";

const routes = [
{path: "/", component:HomeView},
{path: "/AboutApp", component: AboutApp},
{path: "/FooterMap", component: FooterMap},
{path: "/ProjectApp", component: ProjectApp, },
{path: "/MainteNance", component: MainteNance},
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
