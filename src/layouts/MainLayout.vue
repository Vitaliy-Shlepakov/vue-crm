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
            <a class="btn-floating btn-large blue" href="#">
                <i class="large material-icons">add</i>
            </a>
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

