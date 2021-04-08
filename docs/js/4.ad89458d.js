;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    '4af2': function (e, n, t) {},
    '4f4a': function (e, n, t) {
      'use strict'
      t.r(n)
      var r = t('7a23')
      function a(e, n, t, a, o, i) {
        const c = Object(r['B'])('w02')
        return (
          Object(r['u'])(), Object(r['e'])('div', null, [Object(r['h'])(c)])
        )
      }
      const o = Object(r['I'])('data-v-36fd9162')
      Object(r['x'])('data-v-36fd9162')
      const i = { id: 'canva' },
        c = Object(r['h'])('canvas', { id: 'c' }, null, -1)
      Object(r['v'])()
      const s = o(
        (e, n, t, a, o, s) => (Object(r['u'])(), Object(r['e'])('div', i, [c]))
      )
      t('cfc3'), t('ace4')
      var d = {
        name: 'Landing',
        data() {
          return {}
        },
        methods: {
          init: function () {
            var e =
                '#version 300 es\n\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      in vec2 a_position;\n\n      // Used to pass in the resolution of the canvas\n      uniform vec2 u_resolution;\n\n      // all shaders have a main function\n      void main() {\n\n        // convert the position from pixels to 0.0 to 1.0\n        vec2 zeroToOne = a_position / u_resolution;\n\n        // convert from 0->1 to 0->2\n        vec2 zeroToTwo = zeroToOne * 2.0;\n\n        // convert from 0->2 to -1->+1 (clipspace)\n        vec2 clipSpace = zeroToTwo - 1.0;\n\n        gl_Position = vec4(clipSpace, 0, 1);\n      }\n      ',
              n =
                '#version 300 es\n\n      // fragment shaders don\'t have a default precision so we need\n      // to pick one. highp is a good default. It means "high precision"\n      precision highp float;\n\n      // we need to declare an output for the fragment shader\n      out vec4 outColor;\n\n      void main() {\n        // Just set the output to a constant redish-purple\n        outColor = vec4(1, 0, 0.5, 1);\n      }\n      ',
              t = document.querySelector('#c'),
              r = t.getContext('webgl2')
            if (r) {
              var a = webglUtils.createProgramFromSources(r, [e, n]),
                o = r.getAttribLocation(a, 'a_position'),
                i = r.getUniformLocation(a, 'u_resolution'),
                c = r.createBuffer()
              r.bindBuffer(r.ARRAY_BUFFER, c)
              var s = [10, 20, 80, 20, 10, 30, 10, 30, 80, 20, 80, 30]
              r.bufferData(r.ARRAY_BUFFER, new Float32Array(s), r.STATIC_DRAW)
              var d = r.createVertexArray()
              r.bindVertexArray(d), r.enableVertexAttribArray(o)
              var u = 2,
                v = r.FLOAT,
                l = !1,
                f = 0,
                h = 0
              r.vertexAttribPointer(o, u, v, l, f, h),
                webglUtils.resizeCanvasToDisplaySize(r.canvas),
                r.viewport(0, 0, r.canvas.width, r.canvas.height),
                r.clearColor(0, 0, 0, 0),
                r.clear(r.COLOR_BUFFER_BIT | r.DEPTH_BUFFER_BIT),
                r.useProgram(a),
                r.bindVertexArray(d),
                r.uniform2f(i, r.canvas.width / 20, r.canvas.height / 20)
              var g = r.TRIANGLES,
                p = ((h = 0), 6)
              r.drawArrays(g, h, p)
            }
          },
          createShader: function (e, n, t) {
            var r = e.createShader(n)
            e.shaderSource(r, t), e.compileShader(r)
            var a = e.getShaderParameter(r, e.COMPILE_STATUS)
            if (a) return r
            console.log(e.getShaderInfoLog(r)), e.deleteShader(r)
          },
          createProgram: function (e, n, t) {
            var r = e.createProgram()
            e.attachShader(r, n), e.attachShader(r, t), e.linkProgram(r)
            var a = e.getProgramParameter(r, e.LINK_STATUS)
            if (a) return r
            console.log(e.getProgramInfoLog(r)), e.deleteProgram(r)
          },
        },
        mounted() {
          this.init()
        },
      }
      t('7b58')
      ;(d.render = s), (d.__scopeId = 'data-v-36fd9162')
      var u = d,
        v = Object(r['i'])({ components: { W02: u }, name: 'PageIndex' })
      v.render = a
      n['default'] = v
    },
    '7b58': function (e, n, t) {
      'use strict'
      t('4af2')
    },
  },
])
