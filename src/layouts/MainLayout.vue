<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title> Quasar App </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header> Example </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          @updateLink="onClickChild"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <iframe allowfullscreen :src="'#/' + linkSelect" title=""></iframe>
    </q-page-container>
  </q-layout>
</template>
<script>
import EssentialLink from 'components/EssentialLink.vue'
const linksList = [
  {
    title: 'Draw a triangle',
    link: 'p01',
  },
  {
    title: '02',
    link: 'p02',
  },
  {
    title: '03',
    link: 'p03',
  },
  {
    title: '04',
    link: 'p04',
  },
  {
    title: '05',
    link: 'p05',
  },
  {
    title: '06',
    link: 'https://threejs.org/examples/webgl_animation_cloth.html',
  },
]
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink,
  },
  data() {
    return {
      linkSelect: null,
    }
  },
  watch: {},
  mounted() {
    this.getObjURL()
    var that = this
    window.onhashchange = function (v) {
      that.getObjURL()
    }
  },
  methods: {
    onClickChild(v) {
      this.linkSelect = v
      history.replaceState(null, null, '#/?link=' + v)
    },
    getObjURL() {
      var str = window.location.hash
      var objURL = {}
      str.replace(
        new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
        function ($0, $1, $2, $3) {
          objURL[$1] = $3
        }
      )
      if (objURL['link']) this.linkSelect = objURL['link']
      return objURL
    },
  },
  setup() {
    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
})
</script>

<style scoped>
@media (min-width: 1000px) {
  .header {
    display: none;
  }
}

iframe {
  display: flex;
  border: 0px;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
