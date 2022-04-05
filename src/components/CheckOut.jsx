import React from "react";

function CheckOut({ subtotal, details }) {
  // dispatch(placeOrder(subtotal));
  return (
    <div>
      <form
        className=""
        action="https://burgerqueen-vs.herokuapp.com/paynow"
        method="post"
        target="_self"
      >
        <input
          hidden
          className="form-control"
          type="text"
          name="name"
          value={details.name}
        />
        <input
          hidden
          className="form-control"
          type="text"
          name="email"
          value={details.email}
        />
        <input
          hidden
          className="form-control"
          type="text"
          name="phone"
          value="8248929032"
        />
        <input
          hidden
          className="form-control"
          type="text"
          name="amount"
          value={`${subtotal}`}
        />
        <button className="btn form-control btn-primary">Place Order</button>
      </form>
      {/* <button
      type="submit"
        className="btn"
        onClick={() => {
          dispatch(placeOrder(subtotal));
        }}
      >
        Place Order
      </button> */}
    </div>
  );
}

export default CheckOut;
