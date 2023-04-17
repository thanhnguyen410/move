import http from 'src/utils/http'

const authApi = {
  login(data) {
    return http.post('login', data)
  },
  logout() {
    return http.post('logout')
  }
}

export default authApi
