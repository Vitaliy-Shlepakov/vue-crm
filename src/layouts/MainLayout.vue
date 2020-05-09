<template>
    <div class="app-main-layout">

        <Navbar
            @toggleSidebar="isSidebarOpen = !isSidebarOpen"
        />
        <Sidebar
            v-model="isSidebarOpen"
        />
        <main class="app-content" :class="{full: !isSidebarOpen}">

            <div class="app-page">
                <router-view />
            </div>
        </main>

        <div class="fixed-action-btn">
            <router-link to="/record" class="btn-floating btn-large blue">
                <i class="large material-icons">add</i>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar';
    import Sidebar from '../components/Sidebar';

    export default {
        name: 'MainLayout',
        components: {
            Navbar,
            Sidebar
        },
        data: () => ({
            isSidebarOpen: true
        })
    }
</script>

