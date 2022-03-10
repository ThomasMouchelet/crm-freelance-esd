import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { INVOICES_CREATE } from "../routes/config";
import { findAll, remove } from "../services/invoices.service";

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        fetchAll()
    },[])

    const fetchAll = async () => {
        try {
            const data = await findAll()
            setInvoices(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await remove(id)
            fetchAll()
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div>
            <Link to={INVOICES_CREATE}>New invoice</Link>
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
                            <td>
                                <button onClick={() => handleDelete(invoice.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default InvoiceList;