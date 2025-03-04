<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to Your Vue + Cordova App</h1>
    <DeviceInfo />
  </div>
</template>

<script>
import DeviceInfo from '@/components/DeviceInfo.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    DeviceInfo
  }
}
</script>