<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
  >
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
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Chart from "chart.js";

export default {
  mounted: function () {
    axios
    .post(`${window.location.origin}/userData`)
    .then(response => {
      const BingData = response.data.filter(item => {
        return item.model === "Bing";
      })
      const ChatGPTData = response.data.filter(item => {
        return item.model === "ChatGPT";
      })
      const getCountData = (data) => {
        let today = new Date()
        let filteredData = data.filter(item => {
          // 计算时间差，单位是毫秒
          let diff = today - new Date(item.time);
          // 转换成天数
          let days = diff / (1000 * 60 * 60 * 24)
          // 判断是否在7天以内
          return days <= 7
        })
        let groupedData = filteredData.reduce((acc, cur) => {
          // 获取日期字符串，格式是yyyy-mm-dd
          let dateStr = cur.time
          // 如果累加器中没有这个日期的键，就初始化为0
          if (!acc[dateStr]) {
            acc[dateStr] = 0
          }
          // 累加当前数据的值到对应的日期键上
          acc[dateStr] += 1
          // 返回累加器
          return acc
        }, {})
        let response = new Array(7).fill(0)
        return Object.values(groupedData).concat(response)
      }

      this.$nextTick(function () {
        var config = {
          type: "line",
          data: {
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
              },
              {
                label: "ChatGPT",
                fill: false,
                backgroundColor: "#fff",
                borderColor: "#fff",
                data: getCountData(ChatGPTData),
              }
            ],
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false,
              text: "Sales Charts",
              fontColor: "white",
            },
            legend: {
              labels: {
                fontColor: "white",
              },
              align: "end",
              position: "bottom",
            },
            tooltips: {
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "nearest",
              intersect: true,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                  },
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Month",
                    fontColor: "white",
                  },
                  gridLines: {
                    display: false,
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(0, 0, 0, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                  },
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Value",
                    fontColor: "white",
                  },
                  gridLines: {
                    borderDash: [3],
                    borderDashOffset: [3],
                    drawBorder: false,
                    color: "rgba(255, 255, 255, 0.15)",
                    zeroLineColor: "rgba(33, 37, 41, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
            },
          },
        };
        var ctx = document.getElementById("line-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
      });
    })
    .catch((error) => {
      console.log(error);
    })

    this.$nextTick(function () {
        var config = {
          type: "line",
          data: {
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
                data: [0,0,0,0,0,0,0],
                fill: false,
              },
              {
                label: "ChatGPT",
                fill: false,
                backgroundColor: "#fff",
                borderColor: "#fff",
                data: [0,0,0,0,0,0,0],
              }
            ],
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false,
              text: "Sales Charts",
              fontColor: "white",
            },
            legend: {
              labels: {
                fontColor: "white",
              },
              align: "end",
              position: "bottom",
            },
            tooltips: {
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "nearest",
              intersect: true,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                  },
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Month",
                    fontColor: "white",
                  },
                  gridLines: {
                    display: false,
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(0, 0, 0, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                  },
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Value",
                    fontColor: "white",
                  },
                  gridLines: {
                    borderDash: [3],
                    borderDashOffset: [3],
                    drawBorder: false,
                    color: "rgba(255, 255, 255, 0.15)",
                    zeroLineColor: "rgba(33, 37, 41, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
            },
          },
        };
        var ctx = document.getElementById("line-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
      });
  },
};
</script>
