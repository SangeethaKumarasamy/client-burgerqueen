import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../actions/userActions";

export default function NavBar() {
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          Burger Queen
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown">
                <a className="dropbtn nav-link">{currentUser.name}</a>
                <div className="dropdown-content">
                  <a  className="dropdown-item" href="/orders">Orders</a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => dispatch(logOutUser())}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item active">
                <a className="nav-link" href="/login">
                  LogIn
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartState.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
