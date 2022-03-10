import { Route } from "react-router-dom";
import FormInvoice from "../components/FormInvoice";

const InvoicesRoutes = () => {
    return ( 
        <>
            <Route path="/invoices/create" element={<FormInvoice />} />
        </>
     );
}
 
export default InvoicesRoutes;