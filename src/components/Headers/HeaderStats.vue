<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="系统访问量"
              :statTitle="SystemAccess.count"
              :statArrow="SystemAccess.statArrow"
              :statPercent="SystemAccess.statPercent"
              statPercentColor="text-emerald-500"
              statDescripiron="相比昨日"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="缓存文件数"
              :statTitle="CacheFile.count"
              :statArrow="CacheFile.statArrow"
              :statPercent="CacheFile.statPercent"
              statPercentColor="text-red-500"
              statDescripiron="相比昨日"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="外网访问量"
              :statTitle="WebAccess.count"
              :statArrow="WebAccess.statArrow"
              :statPercent="WebAccess.statPercent"
              statPercentColor="text-orange-500"
              statDescripiron="相比昨日"
              statIconName="fas fa-users"
              statIconColor="bg-pink-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="系统负载"
              :statTitle="SystemLoad.count + '%'"
              :statArrow="SystemLoad.statArrow"
              :statPercent="SystemLoad.statPercent"
              statPercentColor="text-emerald-500"
              statDescripiron="相比一小时前"
              statIconName="fas fa-percent"
              statIconColor="bg-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import axios from 'axios'

export default {
  data() {
    return {
      SystemAccess: {
        count: 0,
        statArrow: 'up',
        statPercent: 3.4
      },
      CacheFile: {
        count: 0,
        statArrow: 'up',
        statPercent: 3.4
      },
      WebAccess: {
        count: 0,
        statArrow: 'up',
        statPercent: 3.4
      },
      SystemLoad: {
        count: 0,
        statArrow: 'up',
        statPercent: 3.4
      }
    }
  },
  components: {
    CardStats,
  },
  created() {
    this.getData()
  },
  methods: {
    getData: function() {
      axios
      .post(`${window.location.origin}/system-statistics`,{code: this.$route.params.code})
      .then(response => {
        response.data.count
      })
      .catch((error) => { // 请求失败处理
        console.log(error);
      })
    }
  }
};
</script>
