import http from 'src/utils/http'

const URL = 'users'

const videoApi = {
  getVideos(params) {
    return http.get(URL, { params })
  },
  getVideoDetail(id) {
    return http.get(URL + `/${id}`)
  }
}

export default videoApi
