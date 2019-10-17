import Vue from 'vue'
import Vuex from 'vuex'
import files from '@/store/modules/files'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    files
  }
})

export default store
