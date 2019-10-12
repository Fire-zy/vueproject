<template>
	<div class="homepage">
		<div class="nav_box">
			<span>home</span>
		</div>

		<div class="v-user-pic">
			<router-link :to="{path:'/User',query:{login:item.login}}">
				<img :src="item.avatar_url" class="animated swing" />
			</router-link>
		</div>

		<div class="v-lattice">
			<div class="v-lattice-item v-lattice-one">
				<router-link :to="{path:'/User',query:{login:item.login}}">
					<img src="../assets/latticeProfile.png" />
				</router-link>
				<span>Profile</span>
			</div>
			
			<div class="v-lattice-item v-lattice-two">
				<router-link :to="{path:'/Repo',query:{login:item.login}}">
					<img src="../assets/latticeRepo.png" />
				</router-link>
				<span>Repos</span>
			</div>
			
			<div class="v-lattice-item v-lattice-three">
				<router-link :to="{path:'/Notification',query:{login:item.login}}">
					<img src="../assets/latticeNotification.png" />
				</router-link>
				<span>Notification</span>
			</div>
			
			<div class="v-lattice-item v-lattice-four">
				<router-link :to="{path:'/Issues',query:{login:item.login}}">
					<img src="../assets/latticeIssues.png"  />
				</router-link>
				<span>Issues</span>
			</div>
			
			<div class="v-lattice-item v-lattice-five">
				<router-link :to="{path:'/StarredRepo',query:{login:item.login}}">
					<img src="../assets/latticeStarred.png" />
				</router-link>
				<span>Starred Repo</span>
			</div>
			
			<div class="v-lattice-item  v-lattice-six">
				<img src="../assets/latticeBookmarks.png"/>
				<span>Bookmarks</span>
			</div>
			<div class="v-lattice-item">
				<router-link :to="{path:'/Event',query:{login:item.login}}">
					<img src="../assets/latticeNews.png"/>	
				</router-link>	
				<span>Global News</span>
			</div>
			
			<div class="v-lattice-item">
				<router-link :to="{path:'/Search',query:{login:item.login}}">
					<img src="../assets/latticeSearch.png" />
				</router-link>
				<span>Search</span>
			</div>
			
			<div class="v-lattice-item  v-lattice-nine">
				<img src="../assets/latticeTrace.png" />
				<span>Trace</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomePage',
		data() {
			return {
				item: {}
			}
		},
		created() {
			const home = localStorage.getItem('LOGIN_USER')
			this.item = JSON.parse(home)
		}
	}
</script>

<style>
	.homepage {
		display: flex;
		flex-direction: column;
	}
	
	.nav_box span {
		width: 100%;
		display: block;
		text-align: center;
	}
	
	.nav_box {
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		color: #FFFFFF;
		background-color: #3F51B5;
	}
	
	.v-user-pic {
		height: 170px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.v-user-pic img {
		width: 120px;
		height: 120px;
		border-radius: 90px;
	}
	
	.v-lattice {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	
	.v-lattice-item {
		width: 33.1%;
		height: 130px;	
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border:solid 1px lightskyblue;;
	}
	.v-lattice .v-lattice-item{
		border-left: none;
	}
	.v-lattice .v-lattice-three,.v-lattice-six,.v-lattice-nine{
		border-right: none;
	}
	.v-lattice 
	.v-lattice-one,.v-lattice-two,
	.v-lattice-three,.v-lattice-four,
	.v-lattice-five,.v-lattice-six{
		border-bottom: none;
	}
	
	.v-lattice img{
		width: 50px;
		height: 50px;
		margin-bottom: 15px;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*.homepage img {
		width: 50px;
		height: 50px;
	}
	
	.homepage span {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.v-user-pic {
		width: 100%;
		height: 200px;
		margin-bottom: 10px;
	}
	
	
	.v-user-pic {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	
	.v-user-pic img {
		width: 120px;
		height: 120px;
		border-radius: 90px;
	}
	
	.nav_box {
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		color: #FFFFFF;
		margin-top: -10px;
		background-color: #3F51B5;
	}*/
</style>