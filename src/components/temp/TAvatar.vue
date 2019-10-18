<template>
  <img :alt="url" :width="radius" :height="radius" :src="url"/>
</template>

<script>
export default {
  name: 'TAvatar',
  props: {
    url: {
      type: String
    },
    radius: {
      type: Number,
      default: 40
    }
  }
}
</script>

<style scoped>
img {
  border-radius: 50%;
}
</style>