import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
//import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
//import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Help from "@/views/Help.vue";
import ErrPage from "@/views/Error.vue";
//import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";
import Statistics from "@/views/Statistics.vue";

// v-md-editor
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
//import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import "@/assets/styles/vuepress.css";

import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css'

//import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';

import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';

// mermaid
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';


import Prism from 'prismjs';

// 选择使用主题
VMdPreview.use(vuepressTheme, {
  Prism,
});

VMdPreview.use(createEmojiPlugin())

//VMdPreview.use(createLineNumbertPlugin())

VMdPreview.use(createCopyCodePlugin())

VMdPreview.use(createKatexPlugin())

VMdPreview.use(createMermaidPlugin())

// routes

const routes = [

  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        component: Tables,
      },/*
      {
        path: "/admin/maps",
        component: Maps,
      },*/
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },/*
      {
        path: "/auth/register",
        component: Register,
      },*/
    ],
  },

  {
    path: "/page/",
    component: ErrPage,
  },
  {
    path: "/page/:code",
    component: Landing,
  },
  {
    path: "/help/",
    component: Help,
  },
  {
    path: "/help/:use",
    component: Help,
  },
  {
    path: "/statistics/",
    component: Statistics,
  },  /*
  {
    path: "/profile",
    component: Profile,
  },
  */
  {
    path: "/",
    component: Index,
  },
  //{ path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(VMdPreview).mount("#app");
