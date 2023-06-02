<template>
  <div class="fixed right-0 bottom-0 pointer-events-none">
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
  computed: {
    isCubismData() {
      return this.cubismData
    }
  },
  watch: {
    async isCubismData() {
      if (!this.app) {
        Live2DModel.registerTicker(PIXI.Ticker)
        this.app = new PIXI.Application({
          autoStart: true,
          transparent: true,
          resizeTo: window,
          resolution: this.cubismData.option.dpr || 2,
          antialias: true,
          autoDensity: true
        })
        this.$refs.pixi.appendChild(this.app.view)
      }
      this.app.stage.removeChild(this.model)
      if (this.cubismData.live2d) {
        const model = await Live2DModel.from(this.cubismData.cubismModel)
        model.rotation = this.cubismData.option.rotation
        
        model.motion(this.cubismData.mood)
        const baseRenderTexture = new PIXI.BaseRenderTexture(
          model.width,
          model.height,
        )
        const renderTexture = new PIXI.RenderTexture(baseRenderTexture)
        this.model = new PIXI.Sprite(renderTexture)
        this.model.alpha = this.cubismData.option.alpha
        this.model.scale.set(this.cubismData.option.scale)
        this.model.position.x = this.cubismData.option.position.x
        this.model.position.y = this.cubismData.option.position.y
        this.app.ticker.add(() => {
          this.app.renderer.render(model, renderTexture)
        })
        this.app.stage.addChild(this.model)
        window.Live2d = true
      }
    }
  }
}
</script>
