<template>
  <div class="fixed right-0 bottom-0">
    <canvas id=canvas></canvas>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display/cubism4'

export default {
  props: ['cubismModel','mood'],
  mounted: async function () {
    Live2DModel.registerTicker(PIXI.Ticker)
    const app = new PIXI.Application({
      view: document.getElementById('canvas'),
      autoStart: true,
      transparent: true,
      height: 300,
      width: 150
    })
    const model = await Live2DModel.from(this.cubismModel)
    app.stage.addChild(model)
    model.scale.set(0.1)
    model.motion(this.mood, 0)
  }
}
</script>
