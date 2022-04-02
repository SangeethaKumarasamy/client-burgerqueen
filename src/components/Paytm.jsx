import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Success from "../components/Success";
import Error from "../components/Error";
import Loading from "../components/Loading";

function Paytm() {
  let location = useLocation();
  console.log(location.search.split("=")[1]);
  var loc = location.search.split("&")[0].split("=")[1];
  let subtotal = location.search.split("&")[1].split("=")[1];
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const navigate = useNavigate();

  useEffect(() => {
    if (loc) {
      dispatch(placeOrder(subtotal, location.search));
      navigate("/orders");
    } else {
      alert("payment failed !!");
      navigate("/cart");
    }
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong !!" />}
      {success && <Success success="Your order placed successfully " />}
      {loc ? <h2>Payment Success !!</h2> : <h2>Payment Failed !!</h2>}
    </div>
  );
}
export default Paytm;
