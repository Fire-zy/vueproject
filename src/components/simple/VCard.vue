<template>
  <div class="v_card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VCard',
}
</script>

<style scoped>
.v_card {
  padding: 5px;
  box-shadow: 1px 1px 5px 1px #d7d7d7;
}
</style>