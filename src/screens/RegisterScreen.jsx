import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Success from "../components/Success";
import Error from "../components/Error";
import Loading from "../components/Loading";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;

  const dispatch = useDispatch();

  function register() {
    if (password != cpassword) {
      alert("Passwords are not matched");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div
        className="mx-auto row justify-content-center shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "750px" }}
      >
        {loading && <Loading />}
        {success && <Success success="User registered successfully !!" />}
        {error && <Error error="Email is already registered !!" />}

        <h3>Registration</h3>
        <div className="col-md-5 mt-4" style={{width:"450px"}}>
          <div>
            <input
              required
              type="text"
              placeholder="name"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="confirm password"
              className="form-control"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
            <button onClick={register} className="btn mt-3 mb-3">
              Register
            </button>
            <br />
            <a href="/login" style={{ color: "black" }}>
              Click here to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterScreen;
