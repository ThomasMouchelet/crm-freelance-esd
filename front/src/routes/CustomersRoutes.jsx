import {Route, Routes} from "react-router-dom"
import CustomerList from "../components/CustomerList";
import FormCustomer from "../components/FormCustomer";

const CustomersRoutes = () => {
    return ( 
        <Routes>
            <Route path='/customers'  element={<CustomerList />} />
            <Route path="/customers/create" element={<FormCustomer />} />
        </Routes>
     );
}
 
export default CustomersRoutes;