import { Route, Routes } from "react-router-dom";
import InvoiceList from "../components/InvoiceList";
import LoginForm from "../components/LoginForm";

const MainRoutes = () => {
    return ( 
        <Routes>
            <Route exact path='/'  element={<InvoiceList />} />
            <Route path='/login'  element={<LoginForm />} />
        </Routes>
     );
}
 
export default MainRoutes;