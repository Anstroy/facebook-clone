import { appwrite } from '../utils'

export const state = () => ({
  user: null,
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  REMOVE_USER(state) {
    state.user = null
  },
}

export const actions = {
  async login(ctx, data) {
    console.log('triggred login vuex')
    const { email, password } = data
    try {
      console.log('attempting to login, please wait')
      await appwrite.account.createSession(email, password)
      ctx.dispatch('checkLogin')
    } catch (error) {
      console.error(error)
    }
  },
  async logout(ctx) {
    await appwrite.account.deleteSession('current')
    ctx.commit('REMOVE_USER')
  },
  async checkLogin(ctx) {
    console.log('checkig user')
    console.log('PROCESS', process.server ? 'SERVER' : 'CLIENT')
    if (!process.server) {
      try {
        console.log('TRYING')
        const response = await appwrite.account.get()
        ctx.commit('SET_USER', response)
      } catch (err) {
        console.log('ERRORRRS')
        if (err == 'Error: Unauthorized') return
        console.error(err)
      }
    }
  },
}

export const getters = {
  user(state) {
    return state.user
  },
  isLoggedIn(state) {
    return !!state.user
  },
}
