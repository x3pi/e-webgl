;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1],
  {
    '713b': function (e, t, a) {
      'use strict'
      a.r(t)
      var l = a('7a23')
      const c = Object(l['g'])(' Quasar App '),
        n = Object(l['g'])(' Example ')
      function b(e, t, a, b, i, O) {
        const r = Object(l['B'])('q-btn'),
          j = Object(l['B'])('q-toolbar-title'),
          o = Object(l['B'])('q-toolbar'),
          u = Object(l['B'])('q-header'),
          d = Object(l['B'])('q-item-label'),
          s = Object(l['B'])('EssentialLink'),
          p = Object(l['B'])('q-list'),
          f = Object(l['B'])('q-drawer'),
          g = Object(l['B'])('router-view'),
          h = Object(l['B'])('q-page-container'),
          k = Object(l['B'])('q-layout')
        return (
          Object(l['u'])(),
          Object(l['e'])(
            k,
            { view: 'lHh Lpr lFf' },
            {
              default: Object(l['G'])(() => [
                Object(l['h'])(
                  u,
                  { elevated: '' },
                  {
                    default: Object(l['G'])(() => [
                      Object(l['h'])(o, null, {
                        default: Object(l['G'])(() => [
                          Object(l['h'])(
                            r,
                            {
                              flat: '',
                              dense: '',
                              round: '',
                              icon: 'menu',
                              'aria-label': 'Menu',
                              onClick: e.toggleLeftDrawer,
                            },
                            null,
                            8,
                            ['onClick']
                          ),
                          Object(l['h'])(j, null, {
                            default: Object(l['G'])(() => [c]),
                            _: 1,
                          }),
                          Object(l['h'])(
                            'div',
                            null,
                            'Quasar v' + Object(l['D'])(e.$q.version),
                            1
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
                Object(l['h'])(
                  f,
                  {
                    modelValue: e.leftDrawerOpen,
                    'onUpdate:modelValue':
                      t[1] || (t[1] = (t) => (e.leftDrawerOpen = t)),
                    'show-if-above': '',
                    bordered: '',
                    class: 'bg-grey-1',
                  },
                  {
                    default: Object(l['G'])(() => [
                      Object(l['h'])(p, null, {
                        default: Object(l['G'])(() => [
                          Object(l['h'])(
                            d,
                            { header: '' },
                            { default: Object(l['G'])(() => [n]), _: 1 }
                          ),
                          (Object(l['u'])(!0),
                          Object(l['e'])(
                            l['a'],
                            null,
                            Object(l['A'])(
                              e.essentialLinks,
                              (e) => (
                                Object(l['u'])(),
                                Object(l['e'])(
                                  s,
                                  Object(l['n'])({ key: e.title }, e),
                                  null,
                                  16
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ['modelValue']
                ),
                Object(l['h'])(h, null, {
                  default: Object(l['G'])(() => [Object(l['h'])(g)]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          )
        )
      }
      function i(e, t, a, c, n, b) {
        const i = Object(l['B'])('q-icon'),
          O = Object(l['B'])('q-item-section'),
          r = Object(l['B'])('q-item-label'),
          j = Object(l['B'])('q-item')
        return (
          Object(l['u'])(),
          Object(l['e'])(
            j,
            { clickable: '', tag: 'a', href: e.link },
            {
              default: Object(l['G'])(() => [
                e.icon
                  ? (Object(l['u'])(),
                    Object(l['e'])(
                      O,
                      { key: 0, avatar: '' },
                      {
                        default: Object(l['G'])(() => [
                          Object(l['h'])(i, { name: e.icon }, null, 8, [
                            'name',
                          ]),
                        ]),
                        _: 1,
                      }
                    ))
                  : Object(l['f'])('', !0),
                Object(l['h'])(O, null, {
                  default: Object(l['G'])(() => [
                    Object(l['h'])(r, null, {
                      default: Object(l['G'])(() => [
                        Object(l['g'])(Object(l['D'])(e.title), 1),
                      ]),
                      _: 1,
                    }),
                    Object(l['h'])(
                      r,
                      { caption: '' },
                      {
                        default: Object(l['G'])(() => [
                          Object(l['g'])(Object(l['D'])(e.caption), 1),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
            8,
            ['href']
          )
        )
      }
      var O = Object(l['i'])({
          name: 'EssentialLink',
          props: {
            title: { type: String, required: !0 },
            caption: { type: String, default: '' },
            link: { type: String, default: '#' },
            icon: { type: String, default: '' },
          },
        }),
        r = a('66e5'),
        j = a('4074'),
        o = a('0016'),
        u = a('0170'),
        d = a('eebe'),
        s = a.n(d)
      O.render = i
      var p = O
      s()(O, 'components', {
        QItem: r['a'],
        QItemSection: j['a'],
        QIcon: o['a'],
        QItemLabel: u['a'],
      })
      const f = [
        { title: 'Triangle', link: '#/p01' },
        { title: 'Triangle', link: '#/p02' },
        { title: 'Triangle', link: '#/p03' },
        { title: 'Triangle', link: '#/p04' },
        { title: 'Triangle', link: '#/p05' },
        { title: 'Triangle', link: '#/p06' },
      ]
      var g = Object(l['i'])({
          name: 'MainLayout',
          components: { EssentialLink: p },
          setup() {
            const e = Object(l['z'])(!1)
            return {
              essentialLinks: f,
              leftDrawerOpen: e,
              toggleLeftDrawer() {
                e.value = !e.value
              },
            }
          },
        }),
        h = a('4d5a'),
        k = a('e359'),
        m = a('65c6'),
        w = a('9c40'),
        B = a('6ac5'),
        q = a('9404'),
        Q = a('1c1c'),
        v = a('09e3')
      g.render = b
      t['default'] = g
      s()(g, 'components', {
        QLayout: h['a'],
        QHeader: k['a'],
        QToolbar: m['a'],
        QBtn: w['a'],
        QToolbarTitle: B['a'],
        QDrawer: q['a'],
        QList: Q['a'],
        QItemLabel: u['a'],
        QPageContainer: v['a'],
      })
    },
  },
])
