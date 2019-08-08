<template>
    <div id="app">
        <MyFirstComponent :items="cityList"></MyFirstComponent>
    </div>
</template>

<script>
import MyFirstComponent from './assets/index.js'

export default {
    name: 'app',
    components: {
        MyFirstComponent
    },
    data() {
        return {
            cityList: [
                '北京', '上海', '广州', '深圳'
            ]
        }
    }
}
</script>