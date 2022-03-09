import api from "./api"

function findAll(){
    return api.get('/customers')
        .then(res => res.data['hydra:member'])
}

export {
    findAll
}