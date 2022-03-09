import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../services/customers.service";

const FormCustomer = () => {
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
            await create(credentials)
            navigate('/customers')
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" name="email" onChange={handleChange} />
            <input type="text" placeholder="Company name" name="companyName" onChange={handleChange} />
            <input type="submit" />
        </form>
     );
}
 
export default FormCustomer;