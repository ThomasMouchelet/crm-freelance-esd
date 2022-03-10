import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findAll } from "../services/customers.service";
import { create } from "../services/invoices.service";

const FormInvoice = () => {
    const [credentials, setCredentials] = useState({})
    const [customersList,setCustomersList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllCustomers()
    },[])

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
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const fetchAllCustomers = async () => {
        try {
            const data = await findAll()
            setCustomersList(data)
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="number"  placeholder="amount" name="amount" onChange={handleChange}/>
            <select onChange={handleChange} name="status">
                <option value="sending">Sending</option>
                <option value="cancel">Cancel</option>
                <option value="close">close</option>
            </select>
            <select onChange={handleChange} name="customer">
                {customersList.map(customer => (
                    <option key={customer.id} value={customer.id}>{customer.companyName}</option>
                ))}
            </select>
            <input type="submit" />
        </form>
     );
}
 
export default FormInvoice;