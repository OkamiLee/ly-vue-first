import VDplayer from './ly-vue-first.vue'

VDplayer.install = function(Vue) {
    Vue.component('VDplayer', VDplayer)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VDplayer)
}

export default VDplayer
