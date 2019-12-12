<template>
    <div class="container">
        <nuxt-link :to="'test'">服务端渲染demo3</nuxt-link>
        <div>
            <logo />
            <h1 class="title">
                nuxt-test
            </h1>
            <h2 class="subtitle">
                My terrific Nuxt.js project
            </h2>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">
                    Documentation
                </a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">
                    GitHub
                </a>
            </div>
        </div>
        <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    name: 'te1'
                },
                {
                    id: 2,
                    name: 'te2'
                },
                {
                    id: 3,
                    name: 'te3'
                },
            ]
        }
    }
}
</script>

<style scoped>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
