<template>
    <div class="repo">
        <div class="t-header">
            <i class="fas fa-less-than"></i>
            <span class="t-title">Repo</span>
        </div>
        <div class="t-list">
            <div class="t-list-item" v-for="repo in repos">
                <div>
                    <img :src="repo.owner.avatar_url" width="40" height="40" alt="avatar">
                </div>
                <div class="t-list-item__right">
                    <div class="t-repo">
                        <span>{{repo.name}}</span>
                        <span class="t-repo-lang">{{repo.language}}</span>
                    </div>
                    <div>{{repo.description || "-"}}</div>
                    <div class="t-repo-appender">
                        <div>
                            <i class="far fa-star"></i>
                            <span> {{repo.stargazers_count}}</span>
                        </div>
                        <div>
                            <i class="far fa-eye"></i>
                            <span> {{repo.watchers_count}}</span>
                        </div>
                        <div>
                            <i class="far fa-user"></i>
                            <span> {{repo.owner.login}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'Repo',
        components: {},
        data() {
            return {
                repos: []
            }
        },
        created() {
            this.getMessage()
        },
        methods: {
            async getMessage() {
                const resp = await this.$axios.get(`api/users/${this.$route.query.login}/repos`)
                this.repos = resp.data
            }
        }
    }
</script>

<style scoped lang="less">
    .repo {
        padding-bottom: 30px;
    }

    .t-header {
        padding: 20px 10px;
        background-color: #3F51B5;
        color: #fff
    }

    .t-title {
        font-weight: 800;
        size: 30px;
        margin-left: 10px;
    }


    .t-list {

    }

    .t-list-item {
        padding: 5px;
    }

    .t-list-item__right {
        flex-grow: 1;
    }

    .t-list-item {
        padding: 5px;
        box-shadow: 1px 1px 5px 1px #d7d7d7;
        margin-top: 10px;
        display: flex;
    }

    .t-repo-lang {
        font-size: 12px;
        color: #666;
    }

    .t-repo {
        display: flex;
        justify-content: space-between;
    }

    .t-repo-appender {
        color: #999999;
        font-size: 12px;
        display: flex;
        justify-content: space-around;
    }

</style>