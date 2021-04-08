;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [5],
  {
    '7acf': function (e, a, t) {},
    '7c82': function (e, a, t) {
      'use strict'
      t.r(a)
      var r = t('7a23')
      function n(e, a, t, n, o, i) {
        const c = Object(r['B'])('w03')
        return (
          Object(r['u'])(), Object(r['e'])('div', null, [Object(r['h'])(c)])
        )
      }
      const o = Object(r['I'])('data-v-63d80a43')
      Object(r['x'])('data-v-63d80a43')
      const i = { id: 'canva' },
        c = Object(r['h'])('canvas', { id: 'c' }, null, -1)
      Object(r['v'])()
      const s = o(
        (e, a, t, n, o, s) => (Object(r['u'])(), Object(r['e'])('div', i, [c]))
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
                '#version 300 es\n\n      // an attribute is an input (in) to a vertex shader.\n      // It will receive data from a buffer\n      in vec4 a_position;\n\n      // all shaders have a main function\n      void main() {\n\n        // gl_Position is a special variable a vertex shader\n        // is responsible for setting\n        gl_Position = a_position;\n      }\n      ',
              a =
                '#version 300 es\n\n      // fragment shaders don\'t have a default precision so we need\n      // to pick one. highp is a good default. It means "high precision"\n      precision highp float;\n\n      // we need to declare an output for the fragment shader\n      out vec4 outColor;\n\n      void main() {\n        // Just set the output to a constant redish-purple\n        outColor = vec4(1, 0, 0.5, 1);\n      }\n      ',
              t = document.querySelector('#c'),
              r = t.getContext('webgl2')
            if (r) {
              var n = this.createShader(r, r.VERTEX_SHADER, e),
                o = this.createShader(r, r.FRAGMENT_SHADER, a),
                i = this.createProgram(r, n, o),
                c = r.getAttribLocation(i, 'a_position'),
                s = r.createBuffer()
              r.bindBuffer(r.ARRAY_BUFFER, s)
              var d = [0, 0, 0, 0.5, 0.7, 0]
              r.bufferData(r.ARRAY_BUFFER, new Float32Array(d), r.STATIC_DRAW)
              var u = r.createVertexArray()
              r.bindVertexArray(u), r.enableVertexAttribArray(c)
              var h = 2,
                v = r.FLOAT,
                l = !1,
                f = 0,
                g = 0
              r.vertexAttribPointer(c, h, v, l, f, g),
                webglUtils.resizeCanvasToDisplaySize(r.canvas),
                r.viewport(0, 0, r.canvas.width, r.canvas.height),
                r.clearColor(0, 0, 0, 0),
                r.clear(r.COLOR_BUFFER_BIT),
                r.useProgram(i),
                r.bindVertexArray(u)
              var b = r.TRIANGLES,
                p = ((g = 0), 3)
              r.drawArrays(b, g, p)
            }
          },
          createShader: function (e, a, t) {
            var r = e.createShader(a)
            e.shaderSource(r, t), e.compileShader(r)
            var n = e.getShaderParameter(r, e.COMPILE_STATUS)
            if (n) return r
            console.log(e.getShaderInfoLog(r)), e.deleteShader(r)
          },
          createProgram: function (e, a, t) {
            var r = e.createProgram()
            e.attachShader(r, a), e.attachShader(r, t), e.linkProgram(r)
            var n = e.getProgramParameter(r, e.LINK_STATUS)
            if (n) return r
            console.log(e.getProgramInfoLog(r)), e.deleteProgram(r)
          },
        },
        mounted() {
          this.init()
        },
      }
      t('8239')
      ;(d.render = s), (d.__scopeId = 'data-v-63d80a43')
      var u = d,
        h = Object(r['i'])({ components: { W03: u }, name: 'PageIndex' })
      h.render = n
      a['default'] = h
    },
    8239: function (e, a, t) {
      'use strict'
      t('7acf')
    },
  },
])
