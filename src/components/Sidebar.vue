<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">

        <router-link
            v-for="link in links"
            :key="link.url"
            :to="link.url"
            tag="li"
            active-class="active"
            :exact="link.exact"
        >
            <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>
    export default {
        name: 'Sidebar',
        props: [
            'value'
        ],
        data: function(){
            return {
                links: [
                    {
                      title: 'Счет',
                      url: '/',
                      exact: true
                    },
                    {
                      title: 'История',
                      url: '/history',
                      exact: false
                    },
                    {
                      title: 'Планирование',
                      url: '/planning',
                      exact: false
                    },
                    {
                      title: 'Новая запись',
                      url: '/record',
                      exact: false
                    },
                    {
                      title: 'Категории',
                      url: '/categories',
                      exact: false
                    },
                ]
            }
        }
    }
</script>