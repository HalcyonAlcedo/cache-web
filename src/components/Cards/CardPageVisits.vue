<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            缓存页面
          </h3>
        </div>
        <div
          class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <button
            @click="cleanCache"
            class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            清除所有
          </button>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              缓存地址
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              用户
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              群
            </th>
            <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
            >
              时间
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in pageData" :key="item.herf">
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <a :href="item.herf"> {{item.herf}} </a>
            </th>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{item.user}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{item.group || '-'}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
            >
              {{new Date(item.time).toLocaleString('zh', { hour12: false }).replaceAll('/', '-')}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="py-2 px-4">
      <nav class="block">
        <ul class="flex pl-0 rounded list-none flex-wrap">
          <li class="px-2">
            <a @click="page > 1 ? page -- : page" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-sky-500 bg-white text-sky-500">
              <i class="fas fa-chevron-left -ml-px"></i>
            </a>
          </li>
          <li v-for="i in Math.ceil(userData.length / 10)" class="px-2">
            <a @click="page = i" :class="page === i ? 'bg-emerald-200' : 'bg-blueGray-50'" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-sky-500 text-sky-500">
              {{ i }}
            </a>
          </li>
          <li class="px-2">
            <a @click="page < Math.ceil(userData.length / 10) ? page ++ : page" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-sky-500 bg-white text-sky-500">
              <i class="fas fa-chevron-right -mr-px"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      userData: [
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/j92qz",
    "model": "Bing",
    "time": "2023-04-13T10:28:36.258Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/vlsi0",
    "model": "Bing",
    "time": "2023-04-13T10:56:22.938Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/hpndy",
    "model": "Bing",
    "time": "2023-04-13T13:35:51.451Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/2m0x1",
    "model": "Bing",
    "time": "2023-04-14T07:34:07.210Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/hwds1",
    "model": "Bing",
    "time": "2023-04-14T09:27:25.157Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/8z4pg",
    "model": "Bing",
    "time": "2023-04-14T16:27:45.801Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/b1pcy",
    "model": "Bing",
    "time": "2023-04-14T16:28:37.048Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/jc7ph",
    "model": "Bing",
    "time": "2023-04-14T16:35:26.388Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "踩蘑菇mod学习小组",
    "herf": "http://cache.alcedogroup.com/page/awkgs",
    "model": "Bing",
    "time": "2023-04-15T06:34:52.368Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "踩蘑菇mod学习小组",
    "herf": "http://cache.alcedogroup.com/page/wiqkf",
    "model": "Bing",
    "time": "2023-04-15T06:35:58.020Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/xgje0",
    "model": "Bing",
    "time": "2023-04-15T07:26:53.401Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "踩蘑菇mod学习小组",
    "herf": "http://cache.alcedogroup.com/page/fsytv",
    "model": "Bing",
    "time": "2023-04-15T15:06:28.072Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/mdec6",
    "model": "Bing",
    "time": "2023-04-15T16:10:47.518Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "踩蘑菇mod学习小组",
    "herf": "http://cache.alcedogroup.com/page/wd5yx",
    "model": "Bing",
    "time": "2023-04-16T09:13:26.197Z"
  },
  {
    "user": "Alcedo",
    "bot": "ChatGPT",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/zp14i",
    "model": "ChatGPT",
    "time": "2023-04-16T09:21:54.376Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "踩蘑菇mod学习小组",
    "herf": "http://cache.alcedogroup.com/page/vnc6l",
    "model": "Bing",
    "time": "2023-04-16T09:40:30.939Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/bxu5d",
    "model": "Bing",
    "time": "2023-04-16T14:13:05.792Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/8g2tx",
    "model": "Bing",
    "time": "2023-04-16T14:23:53.273Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/xy4ms",
    "model": "Bing",
    "time": "2023-04-16T14:24:56.770Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/5jrzk",
    "model": "Bing",
    "time": "2023-04-16T14:27:32.684Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/ll10l",
    "model": "Bing",
    "time": "2023-04-17T00:53:06.670Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/2h0tn",
    "model": "Bing",
    "time": "2023-04-17T01:07:29.804Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/10xxz",
    "model": "Bing",
    "time": "2023-04-17T01:09:51.888Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/6yzhs",
    "model": "Bing",
    "time": "2023-04-17T01:10:45.013Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "",
    "herf": "http://cache.alcedogroup.com/page/canwa",
    "model": "Bing",
    "time": "2023-04-17T01:11:17.078Z"
  },
  {
    "user": "Alcedo",
    "bot": "ChatGPT",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/zqeks",
    "model": "ChatGPT",
    "time": "2023-04-17T01:36:57.190Z"
  },
  {
    "user": "Alcedo",
    "bot": "ChatGPT",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/fb3ug",
    "model": "ChatGPT",
    "time": "2023-04-17T01:37:23.437Z"
  },
  {
    "user": "Alcedo",
    "bot": "Bing",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/x26br",
    "model": "Bing",
    "time": "2023-04-17T01:38:35.267Z"
  },
  {
    "user": "Alcedo",
    "bot": "ChatGPT",
    "group": "柴特寄批踢&meme",
    "herf": "http://cache.alcedogroup.com/page/ch7nu",
    "model": "ChatGPT",
    "time": "2023-04-17T01:40:25.135Z"
  },
  {
    "user": "Alcedo",
    "bot": "ChatGPT",
    "group": "踩蘑菇mod学习小组",
    "herf": "http://cache.alcedogroup.com/page/am1t6",
    "model": "ChatGPT",
    "time": "2023-04-17T01:44:03.792Z"
  }
      ],
      page: 1,
    }
  },
  created() {
    this.getData()
  },
  computed: {
    pageData() {
      return this.userData.slice((this.page - 1) * 10, (this.page - 1) * 10 + 10)
    }
  },
  methods: {
    getData: function() {
      axios
      .post(`${window.location.origin}/userData`)
      .then(response => {
        this.userData = response.data.chat
      })
    },
    cleanCache: function() {
      axios
      .post(`${window.location.origin}/cleanCache`)
      .then(() => {
        this.getData()
      })
    },
  },
}
</script>
