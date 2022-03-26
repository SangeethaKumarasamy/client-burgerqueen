import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function OrdersScreen() {
  const dispatch = useDispatch();

  const orderstate = useSelector((state) => state.getUserOrdersReducer);
  const { orders, error, loading } = orderstate;
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <h2>My Orders</h2>
      <div className="row justify-content-center" style={{backgroundColor:"wheat",color:"black"}}>
        {loading && (<Loading />)}
        {error && (<Error error="Something went wrong !!" />)}
        {orders &&
          orders.map((order) => {
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
                            {item.name} [{item.variant}]*{item.quantity}=
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
                    
                    
                    <h3 style={{ fontSize: "25px" }}>Order Info</h3>
                    <hr/>
                    <p>Order Amount :{order.orderAmount}</p>
                    <p>Date : {order.createdAt.substring(0, 10)}</p>
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
