<template>
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
    <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
            本周
          </h6>
          <h2 class="text-white text-xl font-semibold">
            缓存统计
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <Line :data="LineData" :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  components: {
    Line
  },
  data() {
    return {
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
            align: "end",
            position: "bottom",
          },
          title: {
            display: false,
            text: "缓存统计",
            fontColor: "white",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
        },
        scales: {
          x:
          {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            display: true,
            scaleLabel: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          y:
          {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            display: true,
            scaleLabel: {
              display: false,
            },
            grid: {
              tickBorderDash: [3],
              tickBorderDashOffset: 3,
              color: "rgba(255, 255, 255, 0.15)",
            },
            border: {
              display: false
            }
          },

        },
      }
    }
  },
  props: ['chatData'],
  computed: {
    LineData() {
      const BingData = this.chatData?.filter(item => {
        return item.model === "bing" || item.model === "Bing"
      }) || Array.from({ length: 7 }, () => 0)
      const ChatGPTData = this.chatData?.filter(item => {
        return item.model === "ChatGPT" || item.model === "api" || item.model === "api3" || item.model === "browser"
      }) || Array.from({ length: 7 }, () => 0)
      const ChatGLMData = this.chatData?.filter(item => {
        return item.model === "chatglm"
      }) || Array.from({ length: 7 }, () => 0)
      const ClaudeData = this.chatData?.filter(item => {
        return item.model === "claude"
      }) || Array.from({ length: 7 }, () => 0)
      const XH = this.chatData?.filter(item => {
        return item.model === "xh"
      }) || Array.from({ length: 7 }, () => 0)
      const getCountData = (data) => {
        let today = new Date()
        let filteredData = data.filter(item => {
          // 计算时间差，单位是毫秒
          let diff = today - new Date(item.time)
          // 转换成天数
          let days = diff / (1000 * 60 * 60 * 24)
          // 判断是否在7天以内
          return days <= 7
        })
        let groupedData = filteredData.reduce((acc, cur) => {
          // 获取日期字符串，格式是yyyy-mm-dd
          let dateStr = new Date(cur.time).getDay() - 1
          // 如果累加器中没有这个日期的键，就初始化为0
          if (!acc[dateStr]) {
            acc[dateStr] = 0
          }
          // 累加当前数据的值到对应的日期键上
          acc[dateStr] += 1
          // 返回累加器
          return acc
        }, {})
        return Array.from({ length: 7 }, (v, i) => groupedData[i] || 0)
      }
      return {
        labels: [
          "周一",
          "周二",
          "周三",
          "周四",
          "周五",
          "周六",
          "周日",
        ],
        datasets: [
          {
            label: "Bing",
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: getCountData(BingData),
            fill: false,
            tension: 0.3
          },
          {
            label: "ChatGPT",
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: getCountData(ChatGPTData),
            tension: 0.3
          },
          {
            label: "ChatGLM",
            fill: false,
            backgroundColor: "#96512a",
            borderColor: "#96512a",
            data: getCountData(ChatGLMData),
            tension: 0.3
          },
          {
            label: "Claude",
            fill: false,
            backgroundColor: "#aa1155",
            borderColor: "#aa1155",
            data: getCountData(ClaudeData),
            tension: 0.3
          },
          {
            label: "星火",
            fill: false,
            backgroundColor: "#00BFFF",
            borderColor: "#00BFFF",
            data: getCountData(XH),
            tension: 0.3
          }
        ],
      }
    }
  }
}
</script>
