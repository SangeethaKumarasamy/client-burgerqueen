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

function App() {
  return (
    <div className="App">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart"element={<CartScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LogInScreen />} />
          <Route path="/orders"  element={<OrdersScreen />} />
          <Route path="/admin/*" element={<AdminScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
