import api from "./api"

function setToken(credentials){
    
    return api.post("/login_check",credentials)
        .then(res => {
            const {token} = res.data

            localStorage.setItem('token', token)

            return token
        })
}

export {
    setToken
}