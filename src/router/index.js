import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "AlexKharenko | Home",
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "AlexKharenko | About Me",
    },
    component: function () {
      return import("../views/About.vue");
    },
  },
  {
    path: "/works",
    name: "Works",
    meta: {
      title: "AlexKharenko | All Works",
    },
    component: function () {
      return import("../views/Works.vue");
    },
  },
  {
    path: "/works/:id",
    name: "WorkDetails",
    meta: {
      title: "AlexKharenko | Work",
    },
    component: function () {
      return import("../views/WorkDetails.vue");
    },
  },
  {
    path: "/contacts",
    name: "Contacts",
    meta: {
      title: "AlexKharenko | Contacts",
    },
    component: function () {
      return import("../views/Contacts.vue");
    },
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Login",
    },
    component: function () {
      return import("../views/LogIn.vue");
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    meta: {
      title: "SignUp",
    },
    component: function () {
      return import("../views/SignUp.vue");
    },
  },
  {
    path: "/admin",
    name: "Admin",
    meta: {
      title: "Admin Page",
    },
    component: function () {
      return import("../views/Admin.vue");
    },
  },
  {
    path: "/admin/add/work",
    name: "AddWork",
    meta: {
      title: "Add Work",
    },
    component: function () {
      return import("../views/AddWork.vue");
    },
  },
  {
    path: "/admin/add/lang",
    name: "AddLanguage",
    meta: {
      title: "Add Language",
    },
    component: function () {
      return import("../views/AddLanguage.vue");
    },
  },
  {
    path: "/admin/add/details",
    name: "AddDetails",
    meta: {
      title: "Add Details",
    },
    component: function () {
      return import("../views/AddDetails.vue");
    },
  },
  {
    path: "/admin/edit/work",
    name: "Edit work",
    meta: {
      title: "Edit Work",
    },
    component: function () {
      return import("../views/UpdateWork.vue");
    },
  },
  {
    path: "/admin/edit/details",
    name: "Edit details",
    meta: {
      title: "Edit Details",
    },
    component: function () {
      return import("../views/UpdateDetails.vue");
    },
  },
  {
    path: "/404",
    name: "404",
    meta: {
      title: "Not Found",
    },
    component: function () {
      return import("../views/404.vue");
    },
  },
  {
    path: "/505",
    name: "505",
    meta: {
      title: "Server Internal Error",
    },
    component: function () {
      return import("../views/505.vue");
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
    meta: {
      title: "AlexKharenko | 404",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title =
    toRoute.meta && toRoute.meta.title
      ? toRoute.meta.title
      : "AlexKharenko | Home";

  next();
});

export default router;
