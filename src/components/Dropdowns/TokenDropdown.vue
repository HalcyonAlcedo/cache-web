<template>
  <div>
    <a
      class="py-1 px-3 text-xs"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      {{token.substring(1,30)}}...
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-blueGray-500 z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
     {{ token }}
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  props: ['token'],
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
