import Vue from 'vue'
import Vuex from 'vuex'
import cardModule from '@/store/cardModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cardModule
    }
})