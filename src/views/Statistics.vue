<template>
  <div>
    <div class="relative bg-blueGray-100">
      <div class="relative bg-emerald-600 pt-12">
        <admin-navbar />
      </div>
      <div class="px-4 md:px-10 mx-auto w-full pt-6">
        <div>
          <div class="flex flex-wrap">
            <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <card-line-chart />
            </div>
          </div>
          <div class="flex flex-wrap mt-4">
            <div class="w-full xl:w-4/12 px-4">
              <card-social-traffic />
            </div>
          </div>
        </div>
        <footer-admin />
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardPageVisits from "@/components/Cards/CardPageVisits.vue";
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";
export default {
  name: "statistics-page",
  components: {
    AdminNavbar,
    HeaderStats,
    FooterAdmin,
    CardLineChart,
    CardPageVisits,
    CardSocialTraffic,
  },
};
</script>
