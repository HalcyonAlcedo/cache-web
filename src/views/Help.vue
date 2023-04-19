<template>
  <div>
    <index-navbar />
    <section
      class="header relative flex"
    >
      <div class="container md:md-40 mx-auto pt-20">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <h2 class="font-semibold text-4xl text-blueGray-600">
              使用帮助
            </h2>
        </div>

        <div class="flex flex-wrap items-center">
          <div class="w-full md:w-6/12 px-4">
            <div class="flex flex-wrap">
              <div class="relative flex flex-col">
                <div class="px-4 py-5 flex-auto" v-for="item in helpIndexList" :key="item.title">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                  <i :class="item.icon"></i>
                  </div>
                  <router-link :to="`/help/${item.title}`">
                  <h6 class="text-xl mb-1 font-semibold">
                    {{ item.title }}
                    <span v-if="item.tip" class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">
                      {{item.tip}}
                    </span>
                  </h6>
                  </router-link>
                  <p class="text-blueGray-500">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul class="list-none">
          <li class="py-2">
            <div class="flex items-center">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                >
                  <i class="fas fa-info"></i>
                </span>
              </div>
              <div>
                <h4 class="text-blueGray-500">
                  输入 
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
                    #帮助-[功能]
                  </span>
                  获取对应功能的帮助
                </h4>
              </div>
            </div>
          </li>
          <li class="py-2">
            <div class="flex items-center">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                >
                  <i class="fas fa-info"></i>
                </span>
              </div>
              <div>
                <h4 class="text-blueGray-500">
                  系统配置推荐使用 
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
                    锅巴面板
                  </span>
                  进行操作
                </h4>
              </div>
            </div>
          </li>
        </ul>

      </div>
      <img
        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        :src="patternVue"
        alt="..."
      />
    </section>

    <section v-if="this.$route.params.use" class="mt-48 md:mt-40 pb-16 relative bg-blueGray-100">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div class="justify-center text-center flex flex-wrap mt-24">
        <div class="w-full px-12 md:px-4">
          <h2 class="font-semibold text-4xl">{{ this.$route.params.use }}</h2>
        </div>
      </div>
      
      <div class="container mx-auto px-4 pt-16">
        <div class="items-center flex flex-wrap">

          <div class="w-full mb-6 ml-auto px-12 md:px-4" v-for="item in helpList" :key="item.title">
            <div class="md:pr-12">
              <h3 class="text-3xl font-semibold">
                <i :class="`${item.icon} text-xl`"></i>
                {{ item.title }}
                <span v-if="item.tip" class="text-xs font-semibold inline-block py-1 px-2 rounded text-orange-600 bg-orange-200 last:mr-0 mr-1">
                  {{item.tip}}
                </span>
              </h3>
              <v-md-preview class="mt-4" :text="item.text"></v-md-preview>

              <div class="block pb-3">
                <span v-for="order in item.list" :key="order" class="font-semibold inline-block py-1 px-2 rounded-full text-blueGray-500 bg-white last:mr-0 mr-2 mt-2"> {{order}} </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <footer-small class="mt-32"/>
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue"
import FooterSmall from "@/components/Footers/FooterSmall.vue"

import patternVue from "@/assets/img/pattern_vue.png"

import axios from 'axios'

export default {
  data() {
    return {
      patternVue,
      helpIndexList: [
        {
          icon: 'fas fa-comments',
          title: 'AI聊天',
          text: '基于ChatGPT、必应、ChatGLM模型进行AI问答形式的聊天。'
        },
        {
          icon: 'fas fa-paint-brush',
          title: 'AI画图',
          text: '使用Dalle接口进行图片绘制和修改。'
        },
        {
          icon: 'fas fa-wrench',
          title: '插件管理',
          text: '可快捷设置机器人的一些运行状态。',
          tip: '管理功能'
        },
        {
          icon: 'fas fa-wrench',
          title: '设定',
          text: '管理机器人使用的设定。',
          tip: '管理功能'
        },
        {
          icon: 'fas fa-cogs',
          title: '系统设置',
          text: '可快捷设置机器人的一些运行参数。',
          tip: '管理功能'
        },
      ],
      helpList: []
    };
  },
  components: {
    IndexNavbar,
    FooterSmall,
  },
  created() {
    this.getData()
  },
  methods: {
    getData: function() {
      axios
      .post(`${window.location.origin}/help`,{use: this.$route.params.use})
      .then(response => {
        this.helpList = response.data
      })
      .catch((error) => { // 请求失败处理
        console.log(error);
      })
    }
  }
};
</script>
