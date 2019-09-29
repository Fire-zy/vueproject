<template>
	<div class="homepage">
		<div class="v-user-pic">
			<div class="nav_box">
				<span>home</span>
			</div>
			<router-link :to="{path:'/User',query:{login:item.login}}">
				<img :src="item.avatar_url" class="animated swing" />
			</router-link>
		</div>
		<div class="v-lattice-one">
			<div class="v-lattice-left">
				<router-link :to="{path:'/User',query:{login:item.login}}">
					<img src="../assets/latticeProfile.png" class="lattice-pic" />
				</router-link>
				<span>Profile</span>
			</div>

			<div class="v-lattice-center">
				<router-link :to="{path:'/Repo',query:{login:item.login}}">
					<img src="../assets/latticeRepo.png" />
				</router-link>
				<span>Repos</span>
			</div>
			<div class="v-lattice-right">
				<router-link :to="{path:'/Notification',query:{login:item.login}}">
					<img src="../assets/latticeNotification.png" />
				</router-link>
				<span>Notification</span>
			</div>
		</div>
		<div class="v-lattice-two">
			<div class="v-lattice-left">
				<router-link :to="{path:'/Issues',query:{login:item.login}}">
					<img src="../assets/latticeIssues.png" class="lattice-pic" />
				</router-link>
				<span>Issues</span>
			</div>
			<div class="v-lattice-center">
				<router-link :to="{path:'/Star',query:{login:item.login}}">
					<img src="../assets/latticeStarred.png" class="lattice-pic" />
				</router-link>
				<span>Starred Repo</span>
			</div>
			<div class="v-lattice-right">
				<img src="../assets/latticeBookmarks.png" class="lattice-pic" />
				<span>Bookmarks</span>
			</div>
		</div>
		<div class="v-lattice-three">
			<div class="v-lattice-left">
				<img src="../assets/latticeNews.png" class="lattice-pic" />
				<span>Global News</span>
			</div>
			<div class="v-lattice-center">
				<router-link :to="{path:'/Search',query:{login:item.login}}">
					<img src="../assets/latticeSearch.png" class="lattice-pic" />
				</router-link>
				<span>Search</span>
			</div>
			<div class="v-lattice-right">
				<img src="../assets/latticeTrace.png" class="lattice-pic" />
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
	* {
		margin: 0;
		padding: 0;
	}
	
	.homepage img {
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
	
	.v-lattice-one,
	.v-lattice-two,
	.v-lattice-three {
		width: 100%;
		height: 130px;
		display: flex;
		justify-content: flex-start;
		border-bottom: solid 2px lightskyblue;
	}
	
	.v-lattice-one {
		border-top: solid 2px lightskyblue;
	}
	
	.v-lattice-left,
	.v-lattice-center,
	.v-lattice-right {
		width: 33.3%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-right: solid 2px lightskyblue;
	}
	
	.homepage .v-lattice-right {
		border-right: none;
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
	}
</style>