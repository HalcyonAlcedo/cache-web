<template>
  <div>
    <a
      class="py-1 px-3 text-xs"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      {{modelValue.substring(0,60)}}...
    </a>
    <div
      ref="popoverDropdownRef" 
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }" 
      class="relative flex flex-col min-w-0 break-words bg-white w-1/2 mb-6 shadow-lg rounded"
    >
      <div class="px-4 py-5 flex-auto">
        <div class="tab-content tab-space">
          <textarea
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            type="text"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          >
          </textarea>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
