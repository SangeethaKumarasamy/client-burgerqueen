import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import UsersList from "./UsersList";
import BurgersList from "./BurgersList";
import AddBurger from "./AddBurger";
import OrdersList from "./OrdersList";

function AdminScreen() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h3 style={{ fontSize: "35px" }}>Admin Panel</h3>
          <ul className="admin-function">
            <li>
              <Link to="/admin/usersList" style={{ color: "white" }}>
                Users List
              </Link>
            </li>
            <li>
              <Link to="/admin/burgersList" style={{ color: "white" }}>Burgers List</Link>
            </li>
            <li>
              <Link to="/admin/addBurger" style={{ color: "white" }}>Add New Burger</Link>
            </li>
            <li>
              <Link to="/admin/ordersList" style={{ color: "white" }}>Orders List</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/usersList" element={<UsersList />} />
            <Route path="/burgersList" element={<BurgersList />} />
            <Route path="/addBurger" element={<AddBurger />} />
            <Route path="/ordersList" element={<OrdersList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminScreen;
