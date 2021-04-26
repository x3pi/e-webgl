<template>
  <div class="viewer">
    <canvas
      width="1"
      height="1"
      id="container"
      style="position: absolute"
    ></canvas>
    <div id="testCanvas"></div>
  </div>
</template>

<script>
import RainRenderer from './js/lib/rain-renderer'
import Raindrops from './js/lib/raindrops'
import loadImages from './js/lib/image-loader'
import createCanvas from './js/lib/create-canvas'
let textureRainFg,
  textureRainBg,
  textureStormLightningFg,
  textureStormLightningBg,
  textureFalloutFg,
  textureFalloutBg,
  textureSunFg,
  textureSunBg,
  textureDrizzleFg,
  textureDrizzleBg,
  dropColor,
  dropAlpha

let textureFg, textureFgCtx, textureBg, textureBgCtx

let textureBgSize = {
  width: 384,
  height: 256,
}
let textureFgSize = {
  width: 96,
  height: 64,
}

let raindrops, renderer, canvas

export default {
  name: 'Landing',
  data() {
    return {}
  },
  methods: {
    init: function () {
      // Tạo size canvas
      canvas = document.querySelector('#container')

      let dpi = window.devicePixelRatio

      canvas.width = (window.innerWidth / 4) * dpi
      canvas.height = (window.innerHeight / 4) * dpi
      canvas.style.width = window.innerWidth / 4 + 'px'
      canvas.style.height = window.innerHeight / 4 + 'px'

      // Tạo hai canvas chứa hình ảnh
      textureFg = createCanvas(textureFgSize.width, textureFgSize.height)
      textureFgCtx = textureFg.getContext('2d')
      textureBg = createCanvas(textureBgSize.width, textureBgSize.height)
      textureBgCtx = textureBg.getContext('2d')

      this.generateTextures(textureRainFg, textureRainBg)

      // Tạo new Raindrops
      raindrops = new Raindrops(
        canvas.width,
        canvas.height,
        dpi,
        dropAlpha,
        dropColor,
        {
          trailRate: 1,
          trailScaleRange: [0.2, 0.45],
          collisionRadius: 0.45,
          dropletsCleaningRadiusMultiplier: 0.28,
        }
      )

      // Tạo nên RainRenderer
      renderer = new RainRenderer(
        canvas,
        raindrops.canvas,
        textureFg,
        textureBg,
        null,
        {
          brightness: 1.04,
          alphaMultiply: 6,
          alphaSubtract: 3,
          // minRefraction:256,
          // maxRefraction:512
        }
      )
    },
    loadTextures: function () {
      loadImages([
        { name: 'dropAlpha', src: 'rain/img/drop-alpha.png' },
        { name: 'dropColor', src: 'rain/img/drop-color.png' },

        {
          name: 'textureRainFg',
          src: './rain/img/weather/texture-rain-fg.png',
        },
        {
          name: 'textureRainBg',
          src: './rain/img/weather/texture-rain-bg.png',
        },

        {
          name: 'textureStormLightningFg',
          src: 'rain/img/weather/texture-storm-lightning-fg.png',
        },
        {
          name: 'textureStormLightningBg',
          src: 'rain/img/weather/texture-storm-lightning-bg.png',
        },

        {
          name: 'textureFalloutFg',
          src: './rain/img/weather/texture-fallout-fg.png',
        },
        {
          name: 'textureFalloutBg',
          src: './rain/img/weather/texture-fallout-bg.png',
        },

        { name: 'textureSunFg', src: './rain/img/weather/texture-sun-fg.png' },
        { name: 'textureSunBg', src: './rain/img/weather/texture-sun-bg.png' },

        {
          name: 'textureDrizzleFg',
          src: './rain/img/weather/texture-drizzle-fg.png',
        },
        {
          name: 'textureDrizzleBg',
          src: './rain/img/weather/texture-drizzle-bg.png',
        },
      ]).then((images) => {
        textureRainFg = images.textureRainFg.img
        textureRainBg = images.textureRainBg.img

        textureFalloutFg = images.textureFalloutFg.img
        textureFalloutBg = images.textureFalloutBg.img

        textureStormLightningFg = images.textureStormLightningFg.img
        textureStormLightningBg = images.textureStormLightningBg.img

        textureSunFg = images.textureSunFg.img
        textureSunBg = images.textureSunBg.img

        textureDrizzleFg = images.textureDrizzleFg.img
        textureDrizzleBg = images.textureDrizzleBg.img

        dropColor = images.dropColor.img
        dropAlpha = images.dropAlpha.img

        this.init()
      })
    },
    generateTextures: function (fg, bg, alpha = 1) {
      textureFgCtx.globalAlpha = alpha
      textureFgCtx.drawImage(
        fg,
        0,
        0,
        textureFgSize.width,
        textureFgSize.height
      )

      textureBgCtx.globalAlpha = alpha
      textureBgCtx.drawImage(
        bg,
        0,
        0,
        textureBgSize.width,
        textureBgSize.height
      )
    },
  },
  mounted() {
    this.loadTextures()
  },
}
</script>

<style scoped>
body {
  margin: 0;
}
</style>
