import axios from 'axios'

export const state = () => ({
  personages: [],
  filter: 'all'
})

export const mutations = {
  setPersonages (state, payload) {
    state.personages = payload
  },
  setFilter (state, payload) {
    state.filter = payload
  }
}

export const actions = {
  setFilter ({ commit }, payload) {
    commit('setFilter', payload)
  },
  async setPersonages ({ commit }) {
    try {
      const result = await axios ({
        method: 'get',
        url: 'https://swapi.co/api/people/',
        data: {
          format: 'json'
        }
      })
      commit('setPersonages', result.data)
    } catch (error) {
      throw error
    }
  }
}

export const getters = {
  getPersonages (state) {
    return state.personages
  },
  getFilter (state) {
    return state.filter
  }
}
