<template>
  <q-page class="flex flex-center">
    <w01></w01>
  </q-page>
</template>

<script>
import W01 from '../components/W01'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { W01 },
  name: 'PageIndex'
})
</script>
