<template>
  <div>
    <index-navbar />
    <section
      class="header relative items-center flex h-screen max-h-860-px"
    >
      <div class="container mx-auto pt-48">
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
                  <h6 class="text-xl mb-1 font-semibold">
                    {{ item.title }}
                    <span v-if="item.tip" class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-orange-600 bg-orange-200 uppercase last:mr-0 mr-1">
                      {{item.tip}}
                    </span>
                  </h6>
                  <p class="text-blueGray-500">
                    {{ item.text }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul class="list-none mt-6">
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
                  管理人员请输入 
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blueGray-600 bg-blueGray-200 uppercase last:mr-0 mr-1">
                    #管理帮助-[功能]
                  </span>
                  获取对应管理功能的帮助
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

    <section class="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
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

      <div class="container mx-auto px-4 pb-32 pt-48">
        <div class="items-center flex flex-wrap">

          <div class="w-full md:w-4/12 ml-auto px-12 md:px-4" v-for="item in helpList" :key="item.title">
            <div class="md:pr-12">
              <div
                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
              >
                <i class="fas fa-file-alt text-xl"></i>
              </div>
              <h3 class="text-3xl font-semibold">
                {{ item.title }}
              </h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                {{ item.text }}
              </p>
            </div>
          </div>

        </div>
      </div>
      <!--
      <div class="justify-center text-center flex flex-wrap mt-24">
        <div class="w-full md:w-6/12 px-12 md:px-4">
          <h2 class="font-semibold text-4xl">Beautiful Example Pages</h2>
          <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Vue Notus is a completly new product built using our past experience
            in web templates. Take the examples we made for you and start
            playing with them.
          </p>
        </div>
      </div>
      -->
    </section>
    <!--
    <section class="block relative z-1 bg-blueGray-600">
      <div class="container mx-auto">
        <div class="justify-center flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4 -mt-24">
            <div class="flex flex-wrap">
              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  Login Page
                </h5>
                <router-link to="/auth/login">
                  <div
                    class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      class="align-middle border-none max-w-full h-auto rounded-lg"
                      :src="login"
                    />
                  </div>
                </router-link>
              </div>

              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  Profile Page
                </h5>
                <router-link to="/profile">
                  <div
                    class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      class="align-middle border-none max-w-full h-auto rounded-lg"
                      :src="profile"
                    />
                  </div>
                </router-link>
              </div>

              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  Landing Page
                </h5>
                <router-link to="/landing">
                  <div
                    class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      class="align-middle border-none max-w-full h-auto rounded-lg"
                      :src="landing"
                    />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-blueGray-600 overflow-hidden">
      <div class="container mx-auto pb-64">
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-code-branch text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">
              Open Source
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400"
            >
              Since
              <a
                href="https://tailwindcss.com/?ref=creativetim"
                class="text-blueGray-300"
                target="_blank"
              >
                Tailwind CSS
              </a>
              is an open source project we wanted to continue this movement too.
              You can give this version a try to feel the design and also test
              the quality of the code!
            </p>
            <p
              class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400"
            >
              Get it free on Github and please help us spread the news with a
              Star!
            </p>
            <a
              href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
              target="_blank"
              class="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Github Star
            </a>
          </div>

          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <i
              class="fab fa-github text-blueGray-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80"
            ></i>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-16 bg-blueGray-200 relative pt-32">
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
            class="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div class="container mx-auto">
        <div
          class="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10"
        >
          <div class="w-full text-center lg:w-8/12">
            <p class="text-4xl text-center">
              <span role="img" aria-label="love">
                😍
              </span>
            </p>
            <h3 class="font-semibold text-3xl">
              Do you love this Starter Kit?
            </h3>
            <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Cause if you do, it can be yours now. Hit the buttons below to
              navigate to get the Free version for your next project. Build a
              new web app or give an old project a new look!
            </p>
            <div class="sm:block flex flex-col mt-10">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index"
                target="_blank"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <a
                href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
                target="_blank"
                class="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                <i class="fab fa-github text-lg mr-1"></i>
                <span>Help With a Star</span>
              </a>
            </div>
            <div class="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
    -->
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

import patternVue from "@/assets/img/pattern_vue.png";
import componentBtn from "@/assets/img/component-btn.png";
import componentProfileCard from "@/assets/img/component-profile-card.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import documentation from "@/assets/img/documentation.png";
import login from "@/assets/img/login.jpg";
import profile from "@/assets/img/profile.jpg";
import landing from "@/assets/img/landing.jpg";

export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      login,
      profile,
      landing,
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
          text: '可快捷设置机器人的一些运行参数。',
          tip: '管理功能'
        },
      ],
      helpList: [
        {
          icon: 'fas fa-comments',
          title: '聊天',
          text: '私聊或在群中@我+内容进行聊天',
          list: []
        }
      ]
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
