<template>
  <footer class="block py-4">
    <div class="container mx-auto px-4">
      <hr class="mb-4 border-b-1 border-blueGray-200" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div
            class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
          >
            Copyright © {{ date }}
            <a
              href="https://github.com/ikechan8370/chatgpt-plugin"
              class="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
            >
              chatgpt-plugin
            </a>
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <a
                href="https://github.com/ikechan8370"
                class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                Creative ikechan8370
              </a>
            </li>
            <li>
              <a
                href="/"
                class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                主页
              </a>
            </li>
            <li>
              <a
                href="/help/"
                class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                帮助
              </a>
            </li>
            <li>
              <a
                href="/admin/"
                class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                后台
              </a>
            </li>
            <li>
              <a
                href="/admin/settings"
                class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                设置
              </a>
            </li>
            <li>
              <a
                href="/auth/login"
                class="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                更换账号
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
