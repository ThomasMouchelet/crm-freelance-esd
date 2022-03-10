import { Route } from "react-router-dom";
import InvoiceList from "../components/InvoiceList";

const MainRoutes = () => {
    return ( 
        <>
            <Route path='/'  element={<InvoiceList />} />
        </>
     );
}
 
export default MainRoutes;