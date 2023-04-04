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
          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full lg:w-9/12 px-4 mr-auto ml-auto mb-4">
              <div
                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
              >
                <img
                  v-if="userImg"
                  :src="userImg"
                  class="shadow-lg rounded-full mx-auto max-w-100-px"
                />
                <i v-else class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                {{user}}
                
              </h3>
              <v-md-preview :text="question"></v-md-preview>
            </div>
            <div class="w-full lg:w-3/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg items-center"
              >
                <div class="mt-4">
                  <qrcode-vue :value="herf" :size="150" />
                </div>
                <blockquote class="relative p-4 mb-1">
                  <h4 class="text-xl font-bold">
                    访问代码
                  </h4>
                  <p class="text-md font-light mt-2">
                    {{this.$route.params.code}}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">

            <!--消息-->
            <div class="w-full md:w-12/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300"
                >
                  <i class="fas fa-comment text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">{{bot}}</h3>

                <v-md-preview class="mdcode" :text="message"></v-md-preview>

              </div>
            </div>

            <!--图片-->
            <div :class="`w-full md:w-${item.size || 12}/12 ml-auto mr-auto px-4 pb-4`" v-for="item in images" :key="item">
              <img
                class="max-w-full rounded-lg shadow-lg"
                :src="item.src"
              />
            </div>

            <!--引用-->
            <div class="w-full md:w-12/12 ml-auto mr-auto px-4">
              <ul class="list-none mt-6">
                <li class="py-2" v-for="item in quote" :key="item">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                      >
                        <i class="fas fa-info"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                        <a :href="item.url">
                          {{item.text.length > 30 ? item.text.substr(1,30) + '...' : item.text}}
                        </a>
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!--建议的问题-->
            <div class="flex flex-wrap mt-10" v-for="item in suggest" :key="item">
              <span class="text-xs font-semibold inline-block py-1 px-4 mx-4 uppercase rounded text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1">
                {{item}}
              </span>
            </div>

          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import QrcodeVue from 'qrcode.vue'
import axios from 'axios'
import { Base64 } from 'js-base64'

export default {
  data() {
    return {
      user: 'Alcedo',
      userImg: '',
      bot: 'Bing',
      question: '',
      message: '',
      group: '',
      quote: [],
      images: [],
      herf: '',
      time: '',
      suggest: []
    };
  },
  components: {
    Navbar,
    QrcodeVue
  },
  created() {
    this.getData()
  },
  methods: {
    getData: function() {

      // test
      /*
      this.user = 'Alcedo'
      this.userImg = 'https://th.bing.com/th/id/OIP.u6WXgiHIQyd_1d1ET3wJFQAAAA?w=149&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7'
      this.bot = 'Bing'
      this.question = '你可以画一个小猫吗'
      this.message = '当然可以啦，Alcedo大哥哥，我很喜欢画小猫，它们好可爱呀。🐱'
      this.quote = [
          {
              "text": "线槽25*25型号规格 - 京东",
              "url": "https://www.jd.com/xinghao/9855f6d9d0ed66f38df1.html"
          },
          {
              "text": "Domestic Cats Dimensions & Drawings | Dimensions.com",
              "url": "https://www.dimensions.com/collection/cats-cat-breeds"
          },
          {
              "text": "弱电综合布线系统图中CAT3-25P-UTP和CAT.6-4P-UPT是什么 ...",
              "url": "https://zhidao.baidu.com/question/351344047.html"
          }
      ]
      this.images = [
        {
          size: 12,
          src: 'https://th.bing.com/th/id/OIP.u6WXgiHIQyd_1d1ET3wJFQAAAA?w=149&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        },
        {
          size: 12,
          src: 'https://th.bing.com/th/id/OIP.XXdQqQLr4giW6WpzD4WoLAHaHa?w=150&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        }
      ]
      this.suggest = [
        '再画一张',
        '喜欢！'
      ]
      this.group = '柴特寄批踢&meme'
      this.herf = 'http://47.242.61.68:3321/page/hbte3'
      this.time = '2023-04-04T06:20:28.628Z'
      */
      axios
      .post(`${window.location.origin}/page`,{code: this.$route.params.code})
      .then(response => {
        this.user = response.data.user
        this.userImg = response.data.userImg
        this.bot = response.data.bot
        this.question = Base64.decode(response.data.question)
        this.message = Base64.decode(response.data.message)
        this.quote = response.data.quote
        this.images = response.data.images
        this.suggest = response.data.suggest
        this.group = response.data.group
        this.herf = response.data.herf
        this.time = response.data.time
      })
      .catch((error) => { // 请求失败处理
        console.log(error);
      })
    }
  }
};
</script>

<style>
  .mdcode code {white-space: pre-wrap;}
</style>
