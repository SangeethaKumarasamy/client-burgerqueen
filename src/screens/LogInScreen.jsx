import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function LogInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState = useSelector((state) => state.loginUserReducer);
  const { error, loading } = loginState;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function logIn() {
    const user = { email, password };
    dispatch(loginUser(user));
  }
  return (
    <div className="login">
      <div
        className=" mx-auto row justify-content-center mt-5 shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "600px" }}
      >
        <h2>Login</h2>
        {loading && <Loading />}
        {error && <Error error="Invalid Credentials !!" />}
        <div className="col-md-5 mt-4" style={{ width: "400px" }}>
          <div>
            <input
              required
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              required
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={logIn} className="btn mt-3 mb-3">
              LogIn
            </button>
            <br />
            <a style={{ color: "black" }} href="/register">
              Click here to register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LogInScreen;
