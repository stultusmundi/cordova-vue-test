<!-- src/components/DeviceInfo.vue -->
<template>
  <div class="device-info">
    <h2>Device Information</h2>
    <div v-if="isInCordova">
      <p><strong>Platform:</strong> {{ deviceInfo.platform }}</p>
      <p><strong>Model:</strong> {{ deviceInfo.model }}</p>
      <p><strong>Version:</strong> {{ deviceInfo.version }}</p>
      <p><strong>UUID:</strong> {{ deviceInfo.uuid }}</p>
      <p><strong>Manufacturer:</strong> {{ deviceInfo.manufacturer }}</p>
    </div>
    <div v-else>
      <p>Not running in Cordova environment</p>
    </div>
    <button @click="testAlert">Test Alert</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInCordova: !!window.cordova,
      deviceInfo: {}
    }
  },
  mounted() {
    if (this.isInCordova && window.device) {
      this.deviceInfo = {
        platform: window.device.platform,
        model: window.device.model,
        version: window.device.version,
        uuid: window.device.uuid,
        manufacturer: window.device.manufacturer
      }
    }
  },
  methods: {
    testAlert() {
      alert('This is a test alert from the app!')
    }
  }
}
</script>

<style scoped>
.device-info {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
  background-color: #f5f5f5;
}
</style>