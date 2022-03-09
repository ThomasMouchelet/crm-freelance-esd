import api from "./api"

function findAll(){
    return api.get('/invoices')
        .then(res => res.data['hydra:member'])
}

export {
    findAll
}