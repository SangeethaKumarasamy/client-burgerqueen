import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function OrdersScreen() {
  const dispatch = useDispatch();

  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { order, error, loading } = orderstate;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <p>My Orders</p>
      <div className="row justify-content-center" style={{backgroundColor:"wheat",color:"black"}}>
        {loading && <Loading />}
        {error && <Error error="Something went wrong !!" />}
        {order &&
          order.map((orders) => {
            return (
              <div className="col-md-8 m-2 p-1">
                <div className="flex-container">
                  <div className="text-left w-100 m-1">
                    <h3 style={{ fontSize: "25px" }}>Items</h3>
                    <hr/>
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <h1>
                            {item.name} [{item.varient}]*{item.quantity}=
                            {item.price}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-left w-100 m-1">
                    <h3 style={{ fontSize: "25px" }}>Address</h3>
                    <hr/>
                    <p>Street : {order.shippingAddress.street}</p>
                    <p>City : {order.shippingAddress.city}</p>
                    <p>Country : {order.shippingAddress.country}</p>
                    <p>Pincode : {order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-left w-100 m-1">
                    
                    <hr/>
                    <h3 style={{ fontSize: "25px" }}>Order Info</h3>
                    <p>Order Amount :{order.orderAmount}</p>
                    <p>Date : {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction Id:{order.transactionId}</p>
                    <p>Order Id: {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default OrdersScreen;
