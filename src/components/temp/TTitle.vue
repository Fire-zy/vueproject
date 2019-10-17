<template>
    <div class="t-title">
        <span>{{title}}</span>
        <span class="t-sub">{{sub}}</span>
    </div>
</template>

<script>
    export default {
        name: 'TTitle',
        props: {
            title: {
                type: String,
            },
            sub: {
               type: String,
               default: ''
            }
        }
    }
</script>

<style scoped>
    .t-sub {
        font-size: 12px;
        color: #666;
    }

    .t-title {
        display: flex;
        justify-content: space-between;
    }
</style>