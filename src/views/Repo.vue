<template>
    <div class="repo">
        <t-app-bar icon="fas fa-less-than" to="/" text="Repo"></t-app-bar>
        <div class="t-list">
            <div class="t-list-item" v-for="repo in repos" :key="repo.id">
                <t-link :to="`/User?login=${repo.owner.login}`">
                    <t-avatar :url="repo.owner.avatar_url"></t-avatar>
                </t-link>
                <div class="t-list-item__right">
                    <t-title :title="repo.name" :sub="repo.language"></t-title>
                    <t-title :title="repo.description || '-'"></t-title>
                    <div class="t-repo-appender">
                        <t-icon-bar icon="far fa-star" :text="repo.stargazers_count" to="/"></t-icon-bar>
                        <t-icon-bar icon="far fa-eye" :text="repo.watchers_count" to="/"></t-icon-bar>
                        <t-icon-bar icon="far fa-user" :text="repo.owner.login" to="/"></t-icon-bar>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import TAvatar from "../components/temp/TAvatar";
    import TLink from "../components/temp/TLink";
    import TIconBar from "../components/temp/TIconBar";
    import TTitle from "../components/temp/TTitle";
    import TAppBar from "../components/temp/TAppBar";

    export default {
        name: 'Repo',
        components: {TAppBar, TTitle, TIconBar, TLink, TAvatar},
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

    .t-list-item__right {
        flex-grow: 1;
    }

    .t-list-item {
        padding: 8px;
        box-shadow: 1px 1px 5px 1px #d7d7d7;
        margin-top: 10px;
        display: flex;
    }



    .t-repo-appender {
        color: #999999;
        font-size: 12px;
        display: flex;
        justify-content: space-around;
    }

</style>