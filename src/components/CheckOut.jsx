import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Success from "../components/Success";
import Error from "../components/Error";
import Loading from "../components/Loading";


function CheckOut({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();

    // dispatch(placeOrder(subtotal));
  return (
    <div>
      {loading && (<Loading/>)}
      {error && (<Error error="Something went wrong !!"/>)}
      {success && (<Success success="Your order placed successfully "/>)}
       <button className="btn" onClick={() =>{dispatch(placeOrder(subtotal))}}>Place Order</button>
      
    </div>
  );
}

export default CheckOut;
