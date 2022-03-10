import { Route, Routes } from "react-router-dom";
import FormInvoice from "../components/FormInvoice";
import { INVOICES_PATH } from "./config";

const InvoicesRoutes = () => {
    return ( 
        <Routes>
            <Route path={`${INVOICES_PATH}/create`} element={<FormInvoice />} />
        </Routes>
     );
}
 
export default InvoicesRoutes;