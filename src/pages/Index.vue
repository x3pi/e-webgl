<template>
  <div>
    <landing></landing>
  </div>
</template>

<script>
import Landing from '../components/Landing'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Landing },
  name: 'PageIndex',
})
</script>
