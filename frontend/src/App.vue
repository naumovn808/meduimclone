<template>

  <mcv-topbar />
  <router-view />


</template>

<script>

import McvTopbar from '@/components/Topbar/Topbar.vue'
import { actionsTypes } from './store/modules/auth';
export default {
  name: 'McvApp',
  components: {
    McvTopbar
  },
  mounted() {
    this.$store.dispatch(actionsTypes.getCurrentUser);
  }
}
</script>