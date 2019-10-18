<template>
    <div class="t-app-bar">
        <t-icon-bar class="t-title" :to="to" :text="text" :icon="icon"></t-icon-bar>
    </div>
</template>

<script>

    import TLink from "./TLink";
    import TIconBar from "./TIconBar";

    export default {
        name: 'TAppBar',
        components: {TIconBar, TLink},
        props: {
            to: {
                type: [String, Object]
            },
            icon: {
                type: String
            },
            text: {
                type: [String, Number]
            }
        }
    }
</script>

<style scoped>
    .t-app-bar {
        padding: 20px 10px;
        background-color: #3F51B5;
        color: #fff
    }

    .t-title {
        font-weight: 800;
        size: 30px;
        margin-left: 10px;
    }

</style>