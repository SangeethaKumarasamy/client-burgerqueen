import "./App.css";
import NavBar from "./components/NavBar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import LogInScreen from "./screens/LogInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import OrdersScreen from "./screens/OrdersScreen";
import AdminScreen from "./screens/AdminScreen";
import Paytm from './components/Paytm';

function App() {
  return (
    <div className="App">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/cart"element={<CartScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/login" element={<LogInScreen />} />
          <Route exact path="/orders"  element={<OrdersScreen />} />
          <Route exact path="/admin/*" element={<AdminScreen />} />
          <Route exact path="/payment" element={<Paytm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
