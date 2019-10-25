<template>
  <div class="container">
    <div class="popup">
      <div class="popup-header popup_box">
        <slot name="header">
					Select branch or tag
        </slot>
      </div>
      <div class="popup-body popup_box">
        <slot name="body" v-for="p in popup">
					{{p.name}}
        </slot>
      </div>
      <div class="popup-footer popup_box">
        <slot name="footer">
          <div class="btn-green" @click="close">CANCEL</div>
        </slot>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'PPopup',
  data(){
		return{
			popup:[]
		}
  },
  props:['reponame','repologin'],
  created(){
		this.getPopup()
  },
  methods:{
    close (){
      this.$emit('close')
    },
    async getPopup() {
			const resp=await this.$axios.get(`api/repos/${this.repologin}/${this.reponame}/branches`)
			this.popup=resp.data
		},
  }

}
</script>

<style>
  .container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup {
    background: #FFFFFF;
    min-width: 80%;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    color: #6495ED;
    flex-direction: column;
  }
  
  .popup_box{
		padding: 5px;
		margin: 7px 10px 3px 10px;
  }
  .popup-header {
		color: #000000;
    border-bottom: 1px solid #eeeeee;
  }
  .popup-footer {
		display: flex;
    justify-content: flex-end;
  }
 
  .btn-green {
    color: #6495ED;
  }
</style>