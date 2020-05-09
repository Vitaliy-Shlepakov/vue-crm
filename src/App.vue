<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>


<script>
    import AuthLayout from './layouts/AuthLayout';
    import MainLayout from './layouts/MainLayout';

    export default {
        components: {
            AuthLayout,
            MainLayout
        },
        computed: {
            layout() {
                return this.$route.meta.layout || 'MainLayout'
            }
        }
    }
</script>

<style lang="scss">
    @import '~materialize-css';
    @import 'assets/index.css';
</style>
