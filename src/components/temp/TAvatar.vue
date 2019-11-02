<template>
	<div class="t_avatar">
  	<img :alt="url" :width="radius" :height="radius" :src="url"/>
	</div>
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
  margin-right: 10px;
}
</style>