import {Route} from "react-router-dom"
import CustomerList from "../components/CustomerList";
import FormCustomer from "../components/FormCustomer";

const CustomersRoutes = () => {
    return ( 
        <>
            <Route path='/customers'  element={<CustomerList />} />
            <Route path="/customers/create" element={<FormCustomer />} />
        </>
     );
}
 
export default CustomersRoutes;