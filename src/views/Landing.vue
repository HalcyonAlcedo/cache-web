<template>
  <div>
    <navbar :group="group" :time="time" />
    <main>
      <section class="pb-16 relative block bg-blueGray-800">
      </section>

      <section class="pb-20 bg-blueGray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
          </div>
          <div class="flex flex-wrap mt-32">
            <div :class="`w-full lg:w-${this.$route.query.qr === 'true' ? 9 : 12}/12 px-4 mr-auto ml-auto mb-4`">
              <div
                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <img v-if="userImg" :src="userImg" class="shadow-lg rounded-full mx-auto max-w-100-px" />
                <i v-else class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                {{ user }}
              </h3>
              <v-md-preview class="mdcode whitespace-pre-wrap break-all" :text="question"></v-md-preview>
            </div>
            <div v-if="this.$route.query.qr === 'true'" class="w-full lg:w-3/12 px-6 mr-auto ml-auto mt-8">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg items-center">
                <div class="mt-6">
                  <qrcode-vue :value="herf" :size="150" />
                </div>
                <blockquote class="relative p-4 mb-1">
                  <h4 class="text-xl text-center font-bold">
                    访问代码
                  </h4>
                  <p class="text-md text-center font-light mt-2">
                    {{ this.$route.params.code }}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">

            <!--消息-->
            <div class="w-full md:w-12/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300">
                  <img v-if="botImg" :src="botImg" class="shadow-lg rounded-full mx-auto max-w-100-px" />
                  <i v-else class="fas fa-comment text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">{{ bot }}</h3>

                <v-md-preview class="mdcode whitespace-pre-wrap break-all" :text="message"></v-md-preview>

              </div>
            </div>

            <!--图片-->
            <div :class="`w-full md:w-${item.size || 12}/12 ml-auto mr-auto px-4 pb-4`" v-for="item in images"
              :key="item">
              <img class="max-w-full rounded-lg shadow-lg" :src="item.src" />
            </div>

            <!--引用-->
            <div class="w-full md:w-12/12 ml-auto mr-auto px-4">
              <ul class="list-none mt-6">
                <li class="py-2" v-for="item in quote" :key="item">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3">
                        <i class="fas fa-info"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                        <a :href="item.url">
                          {{ item.text.length > 30 ? item.text.substr(1, 30) + '...' : item.text }}
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!--建议的问题-->
            <div class="flex flex-wrap mt-10" v-for="item in suggest" :key="item">
              <span
                class="text-xs font-semibold inline-block py-1 px-4 mx-4 uppercase rounded text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <card-live2d v-if="live2d" :cubismData="live2d" />
    <footer-small />
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue"
import FooterSmall from "@/components/Footers/FooterSmall.vue"
import CardLive2d from "@/components/Cards/CardLive2D.vue"
import QrcodeVue from 'qrcode.vue'
import axios from 'axios'
import { Base64 } from 'js-base64'

export default {
  data() {
    return {
      user: '',
      userImg: '',
      bot: '',
      botImg: '',
      question: '',
      message: '',
      group: '',
      quote: [],
      images: [],
      herf: '',
      time: '',
      suggest: [],
      live2d: {
        live2d: false,
        cubismModel: '',
        mood: '',
        option: {
          scale: 0.1,
          position: {
            x: 0,
            y: 0
          },
          rotation: 0
        }
      }
    }
  },
  components: {
    Navbar,
    FooterSmall,
    QrcodeVue,
    CardLive2d
  },
  created() {
    this.getData()
  },
  methods: {
    getData: function () {
      axios
        .post(`${window.location.origin}/page`, { code: this.$route.params.code })
        .then(response => {
          this.user = response.data.user
          this.userImg = response.data.userImg
          this.bot = response.data.bot
          this.botImg = response.data.botImg
          this.question = Base64.decode(response.data.question)
          this.message = Base64.decode(response.data.message)
          this.quote = response.data.quote
          this.images = response.data.images.map((item) => (
            {
              size: 12,
              src: item
            }
          ))
          this.suggest = response.data.suggest
          this.group = response.data.group
          this.herf = response.data.herf
          this.time = response.data.time

          if (response.data.live2d) {
            this.live2d = {
              live2d: response.data.live2d,
              cubismModel: response.data.live2dModel,
              mood: response.data.mood,
              option: response.data.live2dOption
            }
          } else {
            // 防止live2d加载失败导致的渲染卡死
            window.Live2d = true
            this.live2d = false
          }
        })
        .catch((err) => { // 请求失败处理
          this.$router.push({path:'/page',query: {code: this.$route.params.code, error: err}})
        })
    }
  }
}
</script>

<style>
.mdcode code {
  white-space: pre-wrap;
}
</style>
