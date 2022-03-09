import { useEffect, useState } from "react";
import { findAll } from "../services/customers.service";

const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetchAll()
    },[])

    const fetchAll = async () => {
        try {
            const data = await findAll()
            setCustomers(data)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <table>
            <thead>
                <tr>
                    <th>email</th>
                    <th>Company Name</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => (
                    <tr key={customer.id}>
                        <td>{customer.email}</td>
                        <td>{customer.companyName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default CustomerList;