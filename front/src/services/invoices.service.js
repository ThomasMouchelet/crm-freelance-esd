import api from "./api"

function findAll(){
    return api.get('/invoices')
        .then(res => res.data['hydra:member'])
}

function create(credentials) {
    const customer = `/api/customers/${credentials.customer}`
    
    credentials = {
        ...credentials,
        customer
    }
    
    return api.post('/invoices', credentials )
        .then(res => res.data)
}

function remove(id) {
    return api.delete(`/invoices/${id}`)
}

export {
    findAll,
    create,
    remove
}