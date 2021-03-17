import http from '../http-common'

class ReportDataService {
    getAll() {
        return http.get("/repairs")
    }
    get(id) {
        return http.get(`/repairs/${id}`)
    }
    create(data) {
        return http.post('/repairs', data)
    }
    update(id, data) {
        return http.put(`/repairs/${id}`, data)
    }
    delete(id) {
        return http.delete(`/repairs/${id}`)
    }
    findByTitle(roNumber) {
        return http.get(`/repairs?roNumber=${roNumber}`)
    }
}

export default new ReportDataService()