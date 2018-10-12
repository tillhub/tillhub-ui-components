import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedDate: {
      start: new Date(),
      end: new Date()
    },
    leftPage: {},
    formatedSelected: 'All Time',
    selectedButton: null,
    lastCheck: false,
    sinceCheck: false
  },
  mutations: {
    updateStart(state, payload) {
      const month = payload.getMonth()
      const year = payload.getFullYear()
      state.selectedDate.start = payload
    },
    updateEnd(state, payload) {
      state.selectedDate.end = payload
    },
    updateFormatSelection(state) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: "numeric", minute: "numeric" };
      const start = state.selectedDate.start.toLocaleDateString('en-US', options);
      const end = state.selectedDate.end.toLocaleDateString('en-US', options);
      if(start == end){
        state.formatedSelected = start
      }else{
        state.formatedSelected = start + ' To ' + end
      }
    },
    updateSelectedButton(state, payload) {
      state.selectedButton = payload
    },
    clearSelectedButton(state) {
      if (state.selectedButton !== null) {
        state.selectedButton = null
      }
    },
    updateLastCheck(state, boolean) {
      state.lastCheck = boolean
    },
    updateSinceCheck(state, boolean) {
      state.sinceCheck = boolean
    },
    clearCheckBoxes(state) {
      if (state.lastCheck) {
        state.lastCheck = false
      } else if (state.sinceCheck) {
        state.sinceCheck = false
      }
    },
    resetCalendar(state) {
      state.selectedDate.start = new Date()
      state.selectedDate.end = new Date()
      state.lastCheck = false
      state.sinceCheck = false
      state.selectedButton = null
    }
  }
})
