<template>
  <div class="w-full lg:w-3/12 px-4">
      <div class="relative w-full mb-3">
        <div v-if="subTitle" ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}" class="bg-blueGray-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
          <div>
            <div class="bg-emerald-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-slate-100 uppercase rounded-t-lg">
              {{ title }}
            </div>
            <div class="text-white p-3">
              {{ subTitle }}
            </div>
          </div>
        </div>
        <label
          ref="checkRef"
          v-on:mouseenter="toggleTooltip()"
          v-on:mouseleave="toggleTooltip()"
          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          {{ title }}
        </label>
        <div class="relative flex w-full flex-wrap items-stretch mb-3">
          <input v-model="passwordData" :type="switchPasswd ? 'password' : 'text'" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
          <span class="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
            <i @click="switchPasswd = !switchPasswd" :class="switchPasswd ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>
          </span>
        </div>
      </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  props:{
    title:{
      default: '',
      type:String
    },
    subTitle:{
      default: '',
      type:String
    },
    value:{
      default: 0,
      type:String
    }
  },
  data() {
    return {
      tooltipShow: false,
      switchPasswd: true
    }
  },
  computed: {
    passwordData: {
      get: function() {
        return this.value
      },
      set: function(value) {
        this.$emit('update:value', value)
      }
    }
  },
  methods: {
    toggleTooltip: function(){
      if(this.tooltipShow){
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        createPopper(this.$refs.checkRef, this.$refs.tooltipRef, {
          placement: "top"
        });
      }
    }
  }
}
</script>
