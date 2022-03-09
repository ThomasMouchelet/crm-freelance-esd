import { useEffect, useState } from "react";
import { findAll } from "../services/invoices.service";

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        fetchAll()
    },[])

    const fetchAll = async () => {
        try {
            const data = await findAll()
            setInvoices(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Company Name</th>
                </tr>
            </thead>
            <tbody>
                {invoices.map(invoice => (
                    <tr key={invoice.id}>
                        <td>{invoice.amount}</td>
                        <td>{invoice.status}</td>
                        <td>{invoice.customer.companyName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default InvoiceList;