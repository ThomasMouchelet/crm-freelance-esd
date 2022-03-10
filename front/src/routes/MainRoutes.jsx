import { Route, Routes } from "react-router-dom";
import InvoiceList from "../components/InvoiceList";

const MainRoutes = () => {
    return ( 
        <Routes>
            <Route path='/'  element={<InvoiceList />} />
        </Routes>
     );
}
 
export default MainRoutes;