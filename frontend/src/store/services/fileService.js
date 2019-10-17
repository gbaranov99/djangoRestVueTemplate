import api from '@/store/services/api'

export default {
  fetchFiles() {
    return api.get(`files/`)
              .then(response => response.data)
  },
  postFile(payload) {
    return api.post(`files/`, payload)
              .then(response => response.data)
  },
  deleteFile(fileId) {
    return api.delete(`files/${fileId}`)
              .then(response => response.data)
  }
}
