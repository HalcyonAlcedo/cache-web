<template>
  <div class="w-full lg:w-3/12 px-4">
      <div class="relative w-full mb-3">
        <div v-if="subTitle" ref="tooltipRef" v-bind:class="{'hidden': !tooltipShow, 'block': tooltipShow}" class="bg-blueGray-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg">
          <div>
            <div class="bg-pink-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-slate-100 uppercase rounded-t-lg">
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
        <input
            v-model="checkData"
            type="checkbox"
            class="form-checkbox border-0 rounded text-gray-800 bg-blueGray-600 ml-1 w-5 h-5"
            style="transition: all 0.15s ease 0s;"
          />
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
      default: false,
      type:Boolean
    }
  },
  data() {
    return {
      tooltipShow: false
    }
  },
  computed: {
    checkData: {
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
