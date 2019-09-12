<template>
  <v-container>
    <!--<v-app-bar></v-app-bar>-->
    <v-list>
      <v-list-item v-for="item in stared" :key="item.id">
        <v-avatar :url="item.owner.avatar_url" :radius="30"></v-avatar>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script>
import VContainer from '../components/layout/VContainer'
import VList from '../components/list/VList'
import VListItem from '../components/list/VListItem'
import VAvatar from '../components/simple/VAvatar'

export default {
  components: { VAvatar, VListItem, VList, VContainer },
  data () {
    return {
      stared: []
    }
  },
  created () {
    this.getStared()
  },
  methods: {
    getStared () {
      this.$axios.get('/api/users/bvvy/starred').then(resp => {
        this.stared = resp.data
      })
    }
  }
}
</script>

<style scoped lang="less">

</style>