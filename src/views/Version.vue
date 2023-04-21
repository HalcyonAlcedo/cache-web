<template>
  <div>
    <navbar />
    <main class="profile-page">
      <section class="relative block h-350-px">
        <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
              background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80');
            ">
          <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {{ githubData.target_commitish }}
                      </span>
                      <span class="text-sm text-blueGray-400">分支</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {{ githubData.tag_name }}
                      </span>
                      <span class="text-sm text-blueGray-400">版本</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {{ new Date(githubData.published_at).toLocaleString('zh', { hour12: false }).replaceAll('/', '-')
                        }}
                      </span>
                      <span class="text-sm text-blueGray-400">时间</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  版本更新说明
                </h3>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                      <v-md-preview :text="githubData.body"></v-md-preview>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from 'axios'

import Navbar from "@/components/Navbars/AuthNavbar.vue";

export default {
  data() {
    return {
      githubData: {}
    }
  },
  components: {
    Navbar,
  },
  created() {
    this.getData()
  },
  methods: {
    getData: function () {
      axios
        .get(`https://api.github.com/repos/ikechan8370/chatgpt-plugin/releases/latest`)
        .then(response => {
          this.githubData = response.data
        })
        .catch((error) => {
          this.githubData = {
            target_commitish: 'unknown',
            tag_name: 'unknown',
            body: `::: danger 错误
              ${error.message}
            `
          }
        })
    },
  }
};
</script>
