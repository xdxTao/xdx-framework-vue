<template>
  <div id="app">
    <Main v-wechat-title="$route.meta.title" />
  </div>
</template>

<script>
import Main from './pages/Main.vue'

export default {
    name: 'App',
    components: {
        Main
    }

}
</script>

<style>

</style>
