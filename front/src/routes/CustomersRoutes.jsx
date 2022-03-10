import {Route, Routes} from "react-router-dom"
import CustomerList from "../components/CustomerList";
import FormCustomer from "../components/FormCustomer";
import { CUSTOMERS_PATH } from "./config";

const CustomersRoutes = () => {
    return ( 
        <Routes>
            <Route path={`${CUSTOMERS_PATH}`}  element={<CustomerList />} />
            <Route path={`${CUSTOMERS_PATH}/create`} element={<FormCustomer />} />
        </Routes>
     );
}
 
export default CustomersRoutes;