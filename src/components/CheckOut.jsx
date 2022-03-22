import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderActions";
import Success from "../components/Success";
import Error from "../components/Error";
import Loading from "../components/Loading";


function CheckOut({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();

  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }
  return (
    <div>
      {loading && (<Loading/>)}
      {error && (<Error error="Something went wrong !!"/>)}
      {success && (<Success success="Your order placed successfully "/>)}

           
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        currency="INR"
        stripeKey="pk_test_51KapTVSFyJXvMzrW5TTjZm9TDoudEcv41dF8n5pFp5eeUiJmgPg0VAUUXM4dvSQwopWdOc0A96KTXax8KspZOIOu00q0pBoPug"
      >
        <button className="btn">Pay Now</button>
      </StripeCheckout>
    </div>
  );
}

export default CheckOut;
