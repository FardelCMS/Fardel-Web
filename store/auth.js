import axios from 'axios'


var register_url = "/api/auth/register/"
var login_url = "/api/auth/login/"
var refresh_token_url = "/api/auth/refresh-token/"
var logout_access_url = "/api/auth/logout/"
var logout_refresh_url = "/api/auth/logout-refresh/"

export const state = () => ({
  refresh_token: null,
  access_token: null,
  authenticated: false,
})

export const mutations = {  
  refreshToken(state, token) {
    state.refresh_token = token
  },
  accessToken(state, token, authenticated) {
    state.access_token = token
    state.authenticated = true
  }
}

export const actions = {
  register(email, password) {
    axios.post(this.register_url, {"email": email, "password": password}
    ).then(response => {
      this.commit('refreshToken', response.data.refresh_token)
      this.commit('accessToken', response.data.access_token, true)
    })
  },
  login (email, password) {
    axios.post(this.login_url, {"email": email, "password": password}
    ).then(response => {
      this.commit('refreshToken', response.data.refresh_token)
      this.commit('accessToken', response.data.access_token, true)
    })
  },
  logout () {
    axios.post(this.logout_access_url, {}, {
      headers: {
        "Authorization": 'Bearer ' + this.state.access_token
      }
    }).then(response => {
      this.commit('accessToken', null, false)
    })

    axios.post(this.logout_refresh_url, {}, {
      headers: {
        "Authorization": 'Bearer ' + this.state.refresh_token
      }
    }).then(response => {
      this.commit('refreshToken', null)
    })
  },
  refreshAccess () {
    axios.post(this.refresh_token_url, {}, {
      headers: {
        "Authorization": 'Bearer ' + this.state.refresh_token
      }
    }).then(response => {
      this.commit('accessToken', response.data.access_token)
    })
  },
}