<template>
  <div class="fixed right-0 bottom-0">
    <div id="app" ref="pixi"></div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism4'

export default {
  data() {
    return {
      app: '',
      model: ''
    }
  },
  props: ['cubismData'],
  mounted: async function () {
    Live2DModel.registerTicker(PIXI.Ticker)
    this.app = new PIXI.Application({
      autoStart: true,
      transparent: true,
      height: 300,
      width: 150
    })
    this.$refs.pixi.appendChild(this.app.view)
  },
  computed: {
    isCubismData() {
      return this.cubismData
    }
  },
  watch: {
    async isCubismData() {
      this.app.stage.removeChild(this.model)
      if (this.cubismData.live2d) {
        this.model = await Live2DModel.from(this.cubismData.cubismModel)
        this.app.stage.addChild(this.model)
        this.model.scale.set(this.cubismData.option.scale)
        this.model.position.x = this.cubismData.option.position.x
        this.model.position.y = this.cubismData.option.position.y
        this.model.rotation = this.cubismData.option.rotation
        this.model.motion(this.cubismData.mood)
      }
    }
  }
}
</script>
