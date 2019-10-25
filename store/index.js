import axios from 'axios'

export const state = () => ({
  personages: [],
  filter: 'all',
  count: 0,
  currentPage: 1
})

export const mutations = {
  setPersonages (state, payload) {
    state.personages = payload
  },
  setFilter (state, payload) {
    state.filter = payload
  },
  setCount (state, payload) {
    state.count = payload
  },
  setCurrentPage (state, payload) {
    state.currentPage = payload
  }
}

export const actions = {
  setFilter ({ commit }, payload) {
    commit('setFilter', payload)
  },
  setCurrentPage ({ commit }, payload) {
    commit('setCurrentPage', payload)
  },
  async setPersonages ({ commit }, {url = 'https://swapi.co/api/people/', page = 1}) {
    try {
      const result = await axios ({
        method: 'get',
        url: url,
        params: {
          format: 'json',
          page: page
        }
      })
      commit('setPersonages', result.data)

      const countFloor =  Math.floor(result.data.count)
      commit('setCount', countFloor)
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
  },
  getCount (state) {
    return state.count
  },
  getCurrentPage (state) {
    return state.currentPage
  }
}
