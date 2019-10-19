import axios from 'axios'

export const state = () => ({
  peoples: []
})

export const mutations = {
  setPeoples (state, payload) {
    state.peoples = payload
  }
}

export const actions = { // this.$store.dispatch
  /* setPeoples ({ commit }, payload) {
    commit('setPeoples', payload)
  },*/
  async setPeoples ({ commit }) {
    try {
      const result = await axios.get('https://swapi.co/api/people/?format=json')
      commit('setPeoples', result.data.results)
    } catch (error) {
      throw error
    }
  }
}

export const getters = { // this.$store.getters
  getPeoples (state) {
    return state.peoples
  }
}
