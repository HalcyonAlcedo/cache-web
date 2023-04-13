<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">系统设置 <span class="text-xs font-semibold inline-block py-1 px-4 mx-4 uppercase rounded text-lightBlue-600 bg-lightBlue-200 uppercase last:mr-0 mr-1"> {{chatConfig.version}} </span></h6>
        <button
          @click="saveData"
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
          通用设置
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  图片识别OCR
                </label>
                <input
                    v-model="chatConfig.imgOcr"
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
                允许其他模式
                </label>
                <input
                    v-model="chatConfig.allowOtherMode"
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
                调试信息
                </label>
                <input
                    v-model="chatConfig.debug"
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
                回复确认
                </label>
                <input
                    v-model="redisConfig.turnConfirm"
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
                  对话保留时长
                </label>
                <input
                  v-model="chatConfig.conversationPreserveTime"
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  min="0"
                />
              </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
              代理服务器地址
              </label>
              <input
                v-model="chatConfig.proxy"
                type="url"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
        </div>

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          回复模式设置
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
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          语音模式默认角色
                          </label>
                          <select name="pets" v-model="chatConfig.defaultTTSRole" @change="selectClass('defaultTTSRole',$event)" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                            <option value="随机">随机</option>
                            <option v-for="(options,id) in defaultTTSRole_selectClassData" :key="id" :value="options">
                              {{options}}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          语音转换API地址
                          </label>
                          <input
                            v-model="chatConfig.ttsSpace"
                            type="url"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-6/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          语音转换huggingface反代
                          </label>
                          <input
                            v-model="chatConfig.huggingFaceReverseProxy"
                            type="url"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          控制情感变化程度
                          </label>
                          <input
                            v-model="chatConfig.noiseScale"
                            type="number"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            min="0" max="1"
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          控制音素发音长度
                          </label>
                          <input
                            v-model="chatConfig.noiseScaleW"
                            type="number"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            min="0" max="1"
                          />
                        </div>
                      </div>
                      <div class="w-full lg:w-3/12 px-4">
                        <div class="relative w-full mb-3">
                          <label
                            class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                          控制整体语速
                          </label>
                          <input
                            v-model="chatConfig.lengthScale"
                            type="number"
                            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            min="0" max="2"
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
          绘图设置
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                绘图功能开关
                </label>
                <input
                    v-model="chatConfig.enableDraw"
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
                绘图CD
                </label>
                <input
                  v-model="chatConfig.drawCD"
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  min="0"
                />
              </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
              合成emoji的API地址，默认谷歌厨房
              </label>
              <input
                v-model="chatConfig.emojiBaseURL"
                type="url"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              />
            </div>
          </div>
        </div>

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          服务超时配置
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-3/12 px-4">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                默认超时时间
                </label>
                <input
                  v-model="chatConfig.defaultTimeoutMs"
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
                浏览器超时时间
                </label>
                <input
                  v-model="chatConfig.chromeTimeoutMS"
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
                Sydney模式接受首条信息超时时间
                </label>
                <input
                  v-model="chatConfig.sydneyFirstMessageTimeout"
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  min="0"
                />
              </div>
          </div>
        </div>

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          必应Token管理
        </h6>
        <div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-teal-500">
          <span class="inline-block align-middle mr-8">
            <b class="capitalize">注意</b> Token修改后不会即使生效，将在整体配置保存后生效！
          </span>
        </div>
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
                <input
                  v-model="newBingToken"
                  type="text"
                  class="text-blueGray-600 bg-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                />
                <button
                  @click="addToken"
                  class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  新增
                </button>
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
                      <token-edit v-model="item.Token" />
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
                    <button
                      @click="delToken(item.Token)"
                      class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      删除
                    </button>
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
import TokenEdit from "@/components/Dropdowns/TokenEdit.vue"
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
        defaultTTSRole: '随机', //语音模式默认角色
        conversationPreserveTime: 0, //对话保留时长
        toggleMode: 'at', //触发方式 未实现
        allowOtherMode: true, //允许其他模式
        drawCD: 30, //绘图CD
        enableDraw: true, //绘图功能开关
        proxy: '', //代理服务器地址
        debug: true, //调试信息
        ttsSpace: '', //语音转换API地址
        huggingFaceReverseProxy: '', //语音转换huggingface反代
        noiseScale: 0.6, //控制情感变化程度
        noiseScaleW: 0.668, //控制音素发音长度
        lengthScale: 1.2, //控制整体语速
        defaultTimeoutMs: 120000,
        chromeTimeoutMS: 120000,
        sydneyFirstMessageTimeout: 40000,
        emojiBaseURL: 'https://www.gstatic.com/android/keyboard/emojikitchen',
      },
      redisConfig:{
        bingTokens: [],
        turnConfirm: true,
      },
      modeopenTab: 1,
      newBingToken: '',
      defaultTTSRole_selectClassData: ['特别周', '无声铃鹿', '东海帝皇（帝宝，帝王）', '丸善斯基', '富士奇迹',
  '小栗帽', '黄金船', '伏特加', '大和赤骥', '大树快车', '草上飞', '菱亚马逊',
  '目白麦昆', '神鹰', '好歌剧', '成田白仁', '鲁道夫象征（皇帝）', '气槽',
  '爱丽数码', '星云天空', '玉藻十字', '美妙姿势', '琵琶晨光', '摩耶重炮',
  '曼城茶座', '美浦波旁', '目白赖恩', '菱曙', '雪中美人', '米浴', '艾尼斯风神',
  '爱丽速子（爱丽快子）', '爱慕织姬', '稻荷一', '胜利奖券', '空中神宫', '荣进闪耀',
  '真机伶', '川上公主', '黄金城（黄金城市）', '樱花进王', '采珠', '新光风',
  '东商变革', '超级小海湾', '醒目飞鹰（寄寄子）', '荒漠英雄', '东瀛佐敦',
  '中山庆典', '成田大进', '西野花', '春丽（乌拉拉）', '青竹回忆', '微光飞驹',
  '美丽周日', '待兼福来', 'mr cb（cb先生）', '名将怒涛（名将户仁）', '目白多伯',
  '优秀素质', '帝王光辉', '待兼诗歌剧', '生野狄杜斯', '目白善信', '大拓太阳神',
  '双涡轮（两立直，两喷射，二锅头，逆喷射）', '里见光钻（萨托诺金刚石）', '北部玄驹',
  '樱花千代王', '天狼星象征', '目白阿尔丹', '八重无敌', '鹤丸刚志', '目白光明',
  '成田拜仁（成田路）', '也文摄辉', '小林历奇', '北港火山', '奇锐骏', '苦涩糖霜',
  '小小蚕茧', '骏川手纲（绿帽恶魔）', '秋川弥生（小小理事长）', '乙名史悦子（乙名记者）',
  '桐生院葵', '安心泽刺刺美', '樫本理子', '神里绫华（龟龟）', '琴', '空（空哥）',
  '丽莎', '荧（荧妹）', '芭芭拉', '凯亚', '迪卢克', '雷泽', '安柏', '温迪',
  '香菱', '北斗', '行秋', '魈', '凝光', '可莉', '钟离', '菲谢尔（皇女）',
  '班尼特', '达达利亚（公子）', '诺艾尔（女仆）', '七七', '重云', '甘雨（椰羊）',
  '阿贝多', '迪奥娜（猫猫）', '莫娜', '刻晴', '砂糖', '辛焱', '罗莎莉亚',
  '胡桃', '枫原万叶（万叶）', '烟绯', '宵宫', '托马', '优菈', '雷电将军（雷神）',
  '早柚', '珊瑚宫心海（心海，扣扣米）', '五郎', '九条裟罗', '荒泷一斗（一斗）',
  '埃洛伊', '申鹤', '八重神子（神子）', '神里绫人（绫人）', '夜兰', '久岐忍',
  '鹿野苑平藏', '提纳里', '柯莱', '多莉', '云堇', '纳西妲（草神）', '深渊使徒',
  '妮露', '赛诺', '债务处理人', '坎蒂丝', '真弓快车', '秋人', '望族', '艾尔菲',
  '艾莉丝', '艾伦', '阿洛瓦', '天野', '天目十五', '愚人众-安德烈', '安顺', '安西',
  '葵', '青木', '荒川幸次', '荒谷', '有泽', '浅川', '麻美', '凝光助手', '阿托',
  '竺子', '百识', '百闻', '百晓', '白术', '贝雅特丽奇', '丽塔', '失落迷迭',
  '缭乱星棘', '伊甸', '伏特加女孩', '狂热蓝调', '莉莉娅', '萝莎莉娅', '八重樱',
  '八重霞', '卡莲', '第六夜想曲', '卡萝尔', '姬子', '极地战刃', '布洛妮娅',
  '次生银翼', '理之律者%26希儿', '理之律者', '迷城骇兔', '希儿', '魇夜星渊',
  '黑希儿', '帕朵菲莉丝', '不灭星锚', '天元骑英', '幽兰黛尔', '派蒙bh3',
  '爱酱', '绯玉丸', '德丽莎', '月下初拥', '朔夜观星', '暮光骑士', '格蕾修',
  '留云借风真君', '梅比乌斯', '仿犹大', '克莱因', '圣剑幽兰黛尔', '妖精爱莉',
  '特斯拉zero', '苍玄', '若水', '西琳', '戴因斯雷布', '贝拉', '赤鸢', '镇魂歌',
  '渡鸦', '人之律者', '爱莉希雅', '天穹游侠', '琪亚娜', '空之律者', '薪炎之律者',
  '云墨丹心', '符华', '识之律者', '特瓦林', '维尔薇', '芽衣', '雷之律者',
  '断罪影舞', '阿波尼亚', '榎本', '厄尼斯特', '恶龙', '范二爷', '法拉',
  '愚人众士兵', '愚人众士兵a', '愚人众士兵b', '愚人众士兵c', '愚人众a', '愚人众b',
  '飞飞', '菲利克斯', '女性跟随者', '逢岩', '摆渡人', '狂躁的男人', '奥兹',
  '芙萝拉', '跟随者', '蜜汁生物', '黄麻子', '渊上', '藤木', '深见', '福本',
  '芙蓉', '古泽', '古田', '古山', '古谷昇', '傅三儿', '高老六', '矿工冒',
  '元太', '德安公', '茂才公', '杰拉德', '葛罗丽', '金忽律', '公俊', '锅巴',
  '歌德', '阿豪', '狗三儿', '葛瑞丝', '若心', '阿山婆', '怪鸟', '广竹', '观海',
  '关宏', '蜜汁卫兵', '守卫1', '傲慢的守卫', '害怕的守卫', '贵安', '盖伊', '阿创',
  '哈夫丹', '日语阿贝多（野岛健儿）', '日语埃洛伊（高垣彩阳）', '日语安柏（石见舞菜香）',
  '日语神里绫华（早见沙织）', '日语神里绫人（石田彰）', '日语白术（游佐浩二）',
  '日语芭芭拉（鬼头明里）', '日语北斗（小清水亚美）', '日语班尼特（逢坂良太）',
  '日语坎蒂丝（柚木凉香）', '日语重云（齐藤壮马）', '日语柯莱（前川凉子）',
  '日语赛诺（入野自由）', '日语戴因斯雷布（津田健次郎）', '日语迪卢克（小野贤章）',
  '日语迪奥娜（井泽诗织）', '日语多莉（金田朋子）', '日语优菈（佐藤利奈）',
  '日语菲谢尔（内田真礼）', '日语甘雨（上田丽奈）', '日语（畠中祐）',
  '日语鹿野院平藏（井口祐一）', '日语空（堀江瞬）', '日语荧（悠木碧）',
  '日语胡桃（高桥李依）', '日语一斗（西川贵教）', '日语凯亚（鸟海浩辅）',
  '日语万叶（岛崎信长）', '日语刻晴（喜多村英梨）', '日语可莉（久野美咲）',
  '日语心海（三森铃子）', '日语九条裟罗（濑户麻沙美）', '日语丽莎（田中理惠）',
  '日语莫娜（小原好美）', '日语纳西妲（田村由加莉）', '日语妮露（金元寿子）',
  '日语凝光（大原沙耶香）', '日语诺艾尔（高尾奏音）', '日语奥兹（增谷康纪）',
  '日语派蒙（古贺葵）', '日语琴（斋藤千和）', '日语七七（田村由加莉）', '日语雷电将军（泽城美雪）',
  '日语雷泽（内山昂辉）', '日语罗莎莉亚（加隈亚衣）', '日语早柚（洲崎绫）', '日语散兵（柿原彻也）',
  '日语申鹤（川澄绫子）', '日语久岐忍（水桥香织）', '日语女士（庄子裕衣）', '日语砂糖（藤田茜）',
  '日语达达利亚（木村良平）', '日语托马（森田成一）', '日语提纳里（小林沙苗）', '日语温迪（村濑步）',
  '日语香菱（小泽亚李）', '日语魈（松冈祯丞）', '日语行秋（皆川纯子）', '日语辛焱（高桥智秋）',
  '日语八重神子（佐仓绫音）', '日语烟绯（花守由美里）', '日语夜兰（远藤绫）', '日语宵宫（植田佳奈）',
  '日语云堇（小岩井小鸟）', '日语钟离（前野智昭）', '杰克', '阿吉', '江舟', '鉴秋', '嘉义',
  '纪芳', '景澄', '经纶', '景明', '晋优', '阿鸠', '酒客', '乔尔', '乔瑟夫', '约顿',
  '乔伊斯', '居安', '君君', '顺吉', '纯也', '重佐', '大岛纯平', '蒲泽', '勘解由小路健三郎',
  '枫', '枫原义庆', '荫山', '甲斐田龍馬', '海斗', '惟神晴之介', '鹿野奈奈', '卡琵莉亚',
  '凯瑟琳', '加藤信悟', '加藤洋平', '胜家', '茅葺一庆', '和昭', '一正', '一道', '桂一',
  '庆次郎', '阿贤', '健司', '健次郎', '健三郎', '天理', '杀手a', '杀手b', '木南杏奈',
  '木村', '国王', '木下', '北村', '清惠', '清人', '克列门特', '骑士', '小林', '小春',
  '康拉德', '大肉丸', '琴美', '宏一', '康介', '幸德', '高善', '梢', '克罗索', '久保',
  '九条镰治', '久木田', '昆钧', '菊地君', '久利须', '黑田', '黑泽京之介', '响太', '岚姐',
  '兰溪', '澜阳', '劳伦斯', '乐明', '莱诺', '莲', '良子', '李当', '李丁', '小乐', '灵',
  '小玲', '琳琅a', '琳琅b', '小彬', '小德', '小楽', '小龙', '小吴', '小吴的记忆', '理正',
  '阿龙', '卢卡', '洛成', '罗巧', '北风狼', '卢正', '萍姥姥', '前田', '真昼', '麻纪',
  '真', '愚人众-马克西姆', '女性a', '女性b', '女性a的跟随者', '阿守', '玛格丽特', '真理',
  '玛乔丽', '玛文', '正胜', '昌信', '将司', '正人', '路爷', '老章', '松田', '松本', '松浦',
  '松坂', '老孟', '孟丹', '商人随从', '传令兵', '米歇尔', '御舆源一郎', '御舆源次郎', '千岩军教头',
  '千岩军士兵', '明博', '明俊', '美铃', '美和', '阿幸', '削月筑阳真君', '钱眼儿', '森彦',
  '元助', '理水叠山真君', '理水疊山真君', '朱老板', '木木', '村上', '村田', '永野',
  '长野原龙之介', '长濑', '中野志乃', '菜菜子', '楠楠', '成濑', '阿内', '宁禄', '牛志', '信博',
  '伸夫', '野方', '诺拉', '纪香', '诺曼', '修女', '纯水精灵', '小川', '小仓澪', '冈林',
  '冈崎绘里香', '冈崎陆斗', '奥拉夫', '老科', '鬼婆婆', '小野寺', '大河原五右卫门', '大久保大介',
  '大森', '大助', '奥特', '派蒙', '派蒙2', '病人a', '病人b', '巴顿', '派恩', '朋义',
  '围观群众', '围观群众a', '围观群众b', '围观群众c', '围观群众d', '围观群众e', '铜雀',
  '阿肥', '兴叔', '老周叔', '公主', '彼得', '乾子', '芊芊', '乾玮', '绮命', '杞平',
  '秋月', '昆恩', '雷电影', '兰道尔', '雷蒙德', '冒失的帕拉德', '伶一', '玲花', '阿仁',
  '家臣们', '梨绘', '荣江', '戎世', '浪人', '罗伊斯', '如意', '凉子', '彩香', '酒井',
  '坂本', '朔次郎', '武士a', '武士b', '武士c', '武士d', '珊瑚', '三田', '莎拉', '笹野',
  '聪美', '聪', '小百合', '散兵', '害怕的小刘', '舒伯特', '舒茨', '海龙', '世子',
  '谢尔盖', '家丁', '商华', '沙寅', '阿升', '柴田', '阿茂', '式大将', '清水', '志村勘兵卫',
  '新之丞', '志织', '石头', '诗羽', '诗筠', '石壮', '翔太', '正二', '周平', '舒杨',
  '齐格芙丽雅', '女士', '思勤', '六指乔瑟', '愚人众小兵d', '愚人众小兵a', '愚人众小兵b',
  '愚人众小兵c', '吴老五', '吴老二', '滑头鬼', '言笑', '吴老七', '士兵h', '士兵i',
  '士兵a', '士兵b', '士兵c', '士兵d', '士兵e', '士兵f', '士兵g', '奏太', '斯坦利',
  '掇星攫辰天君', '小头', '大武', '陶义隆', '杉本', '苏西', '嫌疑人a', '嫌疑人b', '嫌疑人c',
  '嫌疑人d', '斯万', '剑客a', '剑客b', '阿二', '忠胜', '忠夫', '阿敬', '孝利', '鹰司进',
  '高山', '九条孝行', '毅', '竹内', '拓真', '卓也', '太郎丸', '泰勒', '手岛', '哲平',
  '哲夫', '托克', '大boss', '阿强', '托尔德拉', '旁观者', '天成', '阿大', '蒂玛乌斯',
  '提米', '户田', '阿三', '一起的人', '德田', '德长', '智树', '利彦', '胖乎乎的旅行者',
  '藏宝人a', '藏宝人b', '藏宝人c', '藏宝人d', '阿祇', '恒雄', '露子', '话剧团团长',
  '内村', '上野', '上杉', '老戴', '老高', '老贾', '老墨', '老孙', '天枢星', '老云',
  '有乐斋', '丑雄', '乌维', '瓦京', '菲尔戈黛特', '维多利亚', '薇尔', '瓦格纳',
  '阿外', '侍女', '瓦拉', '望雅', '宛烟', '琬玉', '战士a', '战士b', '渡辺', '渡部', '阿伟',
  '文璟', '文渊', '韦尔纳', '王扳手', '武沛', '晓飞', '辛程', '星火', '星稀', '辛秀',
  '秀华', '阿旭', '徐刘师', '矢部', '八木', '山上', '阿阳', '颜笑', '康明', '泰久',
  '安武', '矢田幸喜', '矢田辛喜', '义坚', '莺儿', '盈丰', '宜年', '银杏', '逸轩', '横山',
  '永贵', '永业', '嘉久', '吉川', '义高', '用高', '阳太', '元蓉', '玥辉', '毓华', '有香',
  '幸也', '由真', '结菜', '韵宁', '百合', '百合华', '尤苏波夫', '裕子', '悠策', '悠也',
  '于嫣', '柚子', '老郑', '正茂', '志成', '芷巧', '知易', '支支', '周良', '珠函', '祝明', '祝涛']
    }
  },
  components: {
    TokenEdit,
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
        console.log(error)
      })
    },
    saveData: function() {
      axios
      .post(`${window.location.origin}/saveconfig`,{
        chatConfig: this.chatConfig,
        redisConfig: this.redisConfig
      })
      .then(response => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    delToken: function(token) {
      let index = this.redisConfig.bingTokens.findIndex(x => x.Token === token)
      if (index !== -1) {
        this.redisConfig.bingTokens.splice(index, 1)
      }
    },
    addToken: function() {
      let index = this.redisConfig.bingTokens.findIndex(x => x.Token === this.newBingToken)
      if (index === -1) {
        this.redisConfig.bingTokens.push(
          {
            Token: this.newBingToken,
            State: '正常',
            Usage: 0
          }
        )
      }
      this.newBingToken = ''
    },
    selectClass(target, event){
      this.chatConfig[target] = event.target.value
    },
    toggleTabs: function(mode, tabNumber) {
      this[mode] = tabNumber
    }
  }
};
</script>
