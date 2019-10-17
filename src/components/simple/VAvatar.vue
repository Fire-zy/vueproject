<template>
  <img :alt="url" :width="radius" :height="radius" :src="url"/>
</template>

<script>
export default {
  name: 'VAvatar',
  props: {
    url: {
      type: String
    },
    radius: {
      type: Number
    }
  }
}
</script>

<style scoped lang="less">
img {
  border-radius: 50%;
  margin-right: 5px;
}
</style>