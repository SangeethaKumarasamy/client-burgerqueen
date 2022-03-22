import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function AdminScreen() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  });
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h3 style={{ fontSize: "35px" }}>Admin Panel</h3>
          <ul className="admin-function">
            <li>
              <a href="">Users List</a>
            </li>
            <li>
              <a href="">Burgers List</a>
            </li>
            <li>
              <a href="">Add New Burger</a>
            </li>
            <li>
              <a href="">Orders List</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminScreen;
