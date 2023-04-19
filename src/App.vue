<template>
  <div id="app">
    <alert :display="alertDisplay" :text="alertText" :color="alertColor" />
    <router-view />
  </div>
</template>

<script>
import Alert from "@/components/Headers/Alert.vue"

export default {
  name: "admin-layout",
  data() {
    return {
      alertText: '',
      alertColor: '',
      alertDisplay: false,
    }
  },
  components: {
    Alert,
  },
  provide() {
    return {
      AlertMethod: this.alertMethod,
    }
  },
  methods: {
    alertMethod(text, color = 'bg-lightBlue-400', time = 1500) {
      this.alertText = text
      this.alertColor = color
      this.alertDisplay = true
      setInterval(()=>{
        this.alertDisplay = false
      }, time)
    },
  },
}
</script>
