<template>
  <div>
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
      <div class="rounded-t bg-white mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
          <h6 class="text-blueGray-700 text-xl font-bold">用户设置 </h6>
          <button @click="saveData"
            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button">
            保存
          </button>
        </div>
      </div>
      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            对话设置
          </h6>

          <div class="flex flex-wrap">
            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  文本模式
                </label>
                <input v-model="chatmode" name="chatmode" type="radio" value="1"
                  class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                  style="transition: all 0.15s ease 0s;" />
              </div>
            </div>
            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  图片模式
                </label>
                <input v-model="chatmode" name="chatmode" type="radio" value="2"
                  class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                  style="transition: all 0.15s ease 0s;" />
              </div>
            </div>
            <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  语音模式
                </label>
                <input v-model="chatmode" name="chatmode" type="radio" value="3"
                  class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
                  style="transition: all 0.15s ease 0s;" />
              </div>
            </div>
            <stting-select title="vits语音模式默认角色" :selectClassData="selectTTSSpeaker" v-model:value="userSetting.ttsRole" />
            <stting-select title="对话模式" :selectClassData="chatMode_selectClassData" v-model:value="userData.mode" />
          </div>

        </form>
      </div>

      <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
          <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            预设与资料设定
          </h6>

          <div class="flex flex-wrap">
            <stting-textarea title="API设定" v-model:value="userData.cast.api" />
            <stting-textarea title="必应设定" v-model:value="userData.cast.bing" />
            <stting-textarea title="必应扩展资料" v-model:value="userData.cast.bing_resource" />
            <stting-textarea title="Slack设定" v-model:value="userData.cast.slack" />
          </div>

        </form>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full mb-12 xl:mb-0 px-4">
        <card-line-chart :chatData="userData.chat" />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 xl:mb-0 px-4">
        <card-page-visits :chatData="userData.chat" @get-data="getData" />
      </div>
    </div>
  </div>
</template>
<script>
import CardLineChart from "@/components/Cards/CardLineChart.vue"
import CardPageVisits from "@/components/Cards/CardPageVisits.vue"
import SttingSelect from "@/components/Settings/Select.vue"
import SttingTextarea from "@/components/Settings/Textarea.vue"

import TTSSpeaker from "@/assets/config/TTSSpeaker.json"

import axios from 'axios'

export default {
  name: "dashboard-page",
  data() {
    return {
      userSetting: {
        usePicture: false,
        useTTS: false,
        ttsRole: '',
      },
      userData: {
        chat: [],
        mode: '默认',
        cast: {
          api: '',
          bing: '',
          bing_resource: '',
          slack: '',
        }
      },
      chatMode_selectClassData: [
        { label: '默认', value: 'default' },
        { label: '必应', value: 'bing' },
        { label: 'ChatGPT API', value: 'api' },
        { label: 'ChatGPT API3', value: 'api3' },
        { label: 'Slack Claude', value: 'claude' },
        { label: 'ChatGLM', value: 'chatglm' },
        { label: '星火', value: 'xh' },
        { label: '浏览器', value: 'browser' },
      ]
    }
  },
  components: {
    CardLineChart,
    CardPageVisits,
    SttingSelect,
    SttingTextarea,
  },
  inject: ["AlertMethod"],
  computed: {
    chatmode: {
      get() {
        if (this.userSetting.usePicture) {
          return 2
        } else if (this.userSetting.useTTS) {
          return 3
        } else {
          return 1
        }
      },
      set(val) {
        if (val === '1') {
          this.userSetting.usePicture = false
          this.userSetting.useTTS = false
        } else if (val === '2') {
          this.userSetting.usePicture = true
          this.userSetting.useTTS = false
        } else {
          this.userSetting.usePicture = false
          this.userSetting.useTTS = true
        }
      }
    },
    selectTTSSpeaker() {
      return TTSSpeaker.vits
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData: function () {
      axios
        .post(`${window.location.origin}/sysconfig`)
        .then(response => {
          if (response.data.err == '未登录') this.$router.push({ path: '/auth/login' })
          if (!response.data.userSetting && response.data.chatConfig) this.$router.push({ path: '/admin/settings' })
          this.userSetting = response.data.userSetting
        })
        .catch((error) => {
          this.AlertMethod(`服务器出错：${error}`, 'bg-red-400')
        })
      axios
        .post(`${window.location.origin}/userData`)
        .then(response => {
          this.userData = response.data
        })
        .catch((error) => {
          this.AlertMethod(`服务器出错：${error}`, 'bg-red-400')
        })
    },
    saveData: function () {
      axios
        .post(`${window.location.origin}/saveconfig`, {
          userSetting: this.userSetting,
          userConfig: this.userData
        })
        .then(response => {
          this.AlertMethod('保存成功')
        })
        .catch((error) => {
          this.AlertMethod(`保存失败：${error}`, 'bg-red-400')
        })
    },
  }
}
</script>
