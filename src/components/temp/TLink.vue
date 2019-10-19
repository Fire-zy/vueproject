<template>
    <router-link class="t-link" :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        name: 'TLink',
        props: {
            to: {
                type: [String, Object]
            }
        }
    }
</script>
<style scoped>
    .t-link {
        color: inherit;
        text-decoration: none;
    }
</style>