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
      userData: [],
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
