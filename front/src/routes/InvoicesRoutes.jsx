import { Route, Routes } from "react-router-dom";
import FormInvoice from "../components/FormInvoice";
import { INVOICES_CREATE } from "./config";

const InvoicesRoutes = () => {
    return ( 
        <Routes>
            <Route path={INVOICES_CREATE} element={<FormInvoice />} />
        </Routes>
     );
}
 
export default InvoicesRoutes;