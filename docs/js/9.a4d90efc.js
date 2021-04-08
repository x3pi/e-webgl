;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [9],
  {
    e51e: function (e, t, c) {
      'use strict'
      c.r(t)
      var n = c('7a23')
      const o = {
          class:
            'fullscreen bg-blue text-white text-center q-pa-md flex flex-center',
        },
        l = Object(n['h'])(
          'div',
          { style: { 'font-size': '30vh' } },
          ' 404 ',
          -1
        ),
        s = Object(n['h'])(
          'div',
          { class: 'text-h2', style: { opacity: '.4' } },
          ' Oops. Nothing here... ',
          -1
        )
      function r(e, t, c, r, a, b) {
        const i = Object(n['B'])('q-btn')
        return (
          Object(n['u'])(),
          Object(n['e'])('div', o, [
            Object(n['h'])('div', null, [
              l,
              s,
              Object(n['h'])(i, {
                class: 'q-mt-xl',
                color: 'white',
                'text-color': 'blue',
                unelevated: '',
                to: '/',
                label: 'Go Home',
                'no-caps': '',
              }),
            ]),
          ])
        )
      }
      var a = Object(n['i'])({ name: 'Error404' }),
        b = c('9c40'),
        i = c('eebe'),
        u = c.n(i)
      a.render = r
      t['default'] = a
      u()(a, 'components', { QBtn: b['a'] })
    },
  },
])
