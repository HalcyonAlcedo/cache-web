<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">系统设置 <span class="text-xs font-semibold inline-block py-1 px-4 mx-4 uppercase rounded text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1"> {{chatConfig.version}} </span></h6>
        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        >
          保存
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          模式设置
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full">
            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs('modeopenTab', 1)" v-bind:class="{'text-gray-500 bg-white': modeopenTab !== 1, 'bg-purple-200': modeopenTab === 1}">
                  文本模式
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs('modeopenTab', 2)" v-bind:class="{'text-gray-500 bg-white': modeopenTab !== 2, 'bg-purple-200': modeopenTab === 2}">
                  图片模式
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs('modeopenTab', 3)" v-bind:class="{'text-gray-500 bg-white': modeopenTab !== 3, 'bg-purple-200': modeopenTab === 3}">
                  语音模式
                </a>
              </li>
            </ul>
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div class="px-4 py-5 flex-auto">
                <div class="tab-content tab-space">
                  <div v-bind:class="{'hidden': modeopenTab !== 1, 'block': modeopenTab === 1}">
                    <!-- 文本模式 -->
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            自动转图片阈值
                          </label>
                          <input
                            v-model="chatConfig.autoUsePictureThreshold"
                            type="number"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            min="0"
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            长文本自动转图片
                          </label>
                          <input
                              v-model="chatConfig.autoUsePicture"
                              type="checkbox"
                              class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                              style="transition: all 0.15s ease 0s;"
                            />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-bind:class="{'hidden': modeopenTab !== 2, 'block': modeopenTab === 2}">
                    <!-- 图片模式 -->
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          全局图片模式
                          </label>
                          <input
                              v-model="chatConfig.defaultUsePicture"
                              type="checkbox"
                              class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                              style="transition: all 0.15s ease 0s;"
                            />
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          图片引用消息
                          </label>
                          <input
                              v-model="chatConfig.quoteReply"
                              type="checkbox"
                              class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                              style="transition: all 0.15s ease 0s;"
                            />
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          启用二维码
                          </label>
                          <input
                              v-model="chatConfig.showQRCode"
                              type="checkbox"
                              class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                              style="transition: all 0.15s ease 0s;"
                            />
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          预制渲染服务器访问代码
                          </label>
                          <input
                              v-model="chatConfig.cacheEntry"
                              type="checkbox"
                              class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                              style="transition: all 0.15s ease 0s;"
                            />
                        </div>
                      </div>
                      <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          渲染服务器地址
                          </label>
                          <input
                            v-model="chatConfig.cacheUrl"
                            type="url"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-bind:class="{'hidden': modeopenTab !== 3, 'block': modeopenTab === 3}">
                    <!-- 语音模式 -->
                    <div class="flex flex-wrap">
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          全局语音模式
                          </label>
                          <input
                              v-model="chatConfig.defaultUseTTS"
                              type="checkbox"
                              class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                              style="transition: all 0.15s ease 0s;"
                            />
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          语音同时发送文字
                          </label>
                          <input
                              v-model="chatConfig.alsoSendText"
                              type="checkbox"
                              class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                              style="transition: all 0.15s ease 0s;"
                            />
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          语音转文字阈值
                          </label>
                          <input
                            v-model="chatConfig.ttsAutoFallbackThreshold"
                            type="number"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            min="0" max="299"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          必应Token管理
        </h6>
        <div class="flex flex-wrap">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-emerald-900 text-white">
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3
                    class="font-semibold text-lg text-white"
                  >
                    Token管理面板
                  </h3>
                </div>
              </div>
            </div>
            <div class="block w-full overflow-x-auto">
              <table class="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th
                      class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-emerald-800 text-emerald-300 border-emerald-700"
                    >
                      Token
                    </th>
                    <th
                      class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-emerald-800 text-emerald-300 border-emerald-700"
                    >
                      状态
                    </th>
                    <th
                      class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-emerald-800 text-emerald-300 border-emerald-700"
                    >
                      用量
                    </th>
                    <th
                      class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-emerald-800 text-emerald-300 border-emerald-700"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in redisConfig.bingTokens" :key="item.Token">
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <token-dropdown :token="item.Token" />
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <i class="fas fa-circle mr-2" :class="item.State === '正常' ? 'text-emerald-500' : (item.State === '受限' ? 'text-orange-500' : 'text-red-500')"></i> {{item.State}}
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <div class="flex items-center">
                        <span class="mr-2">{{item.Usage}}</span>
                        <div class="relative w-full">
                          <div
                            class="overflow-hidden h-2 text-xs flex rounded"
                            :class="item.Usage < 400 ? 'bg-emerald-200':'bg-red-200'"
                            
                          >
                            <div
                              :style="`width: ${(item.Usage/600)*100}%;`"
                              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                              :class="item.Usage < 400 ? 'bg-emerald-500':'bg-red-500'"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                    >
                      <!--<table-dropdown />-->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          违禁内容核查
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
              输出黑名单
              </label>
              <textarea
                v-model="chatConfig.blockWords"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
              </textarea>
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
              输入黑名单
              </label>
              <textarea
                v-model="chatConfig.promptBlockWords"
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
              </textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TokenDropdown from "@/components/Dropdowns/TokenDropdown.vue";
import axios from 'axios'

export default {
  data() {
    return {
      chatConfig: {
        blockWords: '', //输入黑名单
        promptBlockWords: '', //输出黑名单
        version: '', //系统版本
        imgOcr: true, //图片识别
        defaultUsePicture: false, //全局图片模式
        defaultUseTTS: false, //全局语音模式
        alsoSendText: false, //语音同时发送文字
        autoUsePicture: true, //长文本自动转图片
        autoUsePictureThreshold: 1200, //自动转图片阈值
        ttsAutoFallbackThreshold: 299, //语音转文字阈值
        quoteReply: true, //图片引用消息
        showQRCode: true, //启用二维码
        cacheUrl: 'https://content.alcedogroup.com', //渲染服务器地址
        cacheEntry: false, //预制渲染服务器访问代码
      },
      redisConfig:{
        bingTokens: []
      },
      modeopenTab: 1
    }
  },
  components: {
    TokenDropdown,
  },
  created() {
    this.getData()
  },
  methods: {
    getData: function() {
      axios
      .post(`${window.location.origin}/sysconfig`)
      .then(response => {
        if (response.data.err == '未登录') this.$router.push({path:'/auth/login'})
        this.chatConfig = response.data.chatConfig
        this.redisConfig = response.data.redisConfig
        this.chatConfig.blockWords = response.data.chatConfig.blockWords.join(',')
        this.chatConfig.promptBlockWords = response.data.chatConfig.promptBlockWords.join(',')
      })
      .catch((error) => {
        console.log(error);
      })
    },
    saveData: function() {
      axios
      .post(`${window.location.origin}/saveconfig`,{
        chatConfig: this.chatConfig
      })
      .then(response => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    },
    toggleTabs: function(mode, tabNumber) {
      this[mode] = tabNumber
    }
  }
};
</script>
