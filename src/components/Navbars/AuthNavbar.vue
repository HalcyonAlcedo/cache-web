<template>
  <nav class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <router-link
          class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" to="/">
          ChatGPT-Plugin
        </router-link>
      </div>
      <div class="flex flex-grow items-center bg-opacity-0 lg:shadow-none">
        <ul class="flex flex-col flex-row list-none ml-auto">
          <li class="text-teal-500 flex items-center mr-4" v-if="group">
            来自群: {{ group}}
          </li>
          <li class="text-teal-500 flex items-center mr-4">
            时间：{{ dateFormat(time) }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: ['group','time'],
  data() {
    return {
      navbarOpen: false
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
    dateFormat: function (time) {
      var date = time ? new Date(time) : new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1 < 10 ?
        '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      return year + '年' + month + '月' + day + '日' + ' ' + hours + ':' + minutes
    }
  },
};
</script>
