import axios from "axios"

function findAll(){
    return axios.get('http://localhost:8000/api/invoices')
        .then(res => res.data['hydra:member'])
}

export {
    findAll
}