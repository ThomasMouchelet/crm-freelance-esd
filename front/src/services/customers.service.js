import api from "./api"

function findAll(){
    return api.get('/customers')
        .then(res => res.data['hydra:member'])
}

function create(credentials) {
    return api.post('/customers', credentials)
        .then(res => res.data)
}

export {
    findAll,
    create
}