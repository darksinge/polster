export const state = () => ({
  user: null
})

export const mutations = {
  login (state, { username, password }) {
    if (username === 'admin' && password === 'password') {
      const user = {
        name: 'admin',
        role: 'admin'
      }
      state.user = user
      localStorage.user = JSON.stringify(user)
    }
  },
  logout (state) {
    state.user = null
    localStorage.user = null
  },
  setUser (state, user) {
    state.user = user
  }
}

export const actions = {
  LOGIN ({ commit }, credentials) {
    commit('login', credentials)
  },
  LOGOUT ({ commit }) {
    commit('setUser', null)
  },
  GET_USER ({ commit }) {
    const { user } = localStorage
    commit('setUser', user ? JSON.parse(user) : null)
  }
}
