import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { setToken } from "../services/auth.service"

const LoginForm = () => {
    const [credentials, setCredentials] = useState({})
    const navigate = useNavigate();

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await setToken(credentials)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} />    
            <input type="text" name="password" onChange={handleChange} />    
            <input type="submit" />
        </form>
     );
}
 
export default LoginForm;