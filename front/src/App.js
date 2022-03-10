import './App.css';
import {BrowserRouter, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import CustomersRoutes from "./routes/CustomersRoutes"
import InvoicesRoutes from './routes/InvoicesRoutes';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <MainRoutes />
        <CustomersRoutes />
        <InvoicesRoutes />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
