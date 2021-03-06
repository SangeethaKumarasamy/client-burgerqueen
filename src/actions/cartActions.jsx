export const addToCart =
  (burger, quantity, variant) => (dispatch, getState) => {
    var cartItem = {
      name: burger.name,
      _id: burger._id,
      image: burger.image,
      variant: variant,
      quantity: Number(quantity),
      prices: burger.prices,
      price: burger.prices[0][variant] * quantity,
    };

    if (cartItem.quantity > 10) {
      alert("Sorry! You can't add more than 10 quantities");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: burger });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
    }
    const cartItems = getState().cartReducer.cartItems;

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteFromCart = (burger) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: burger }); 
  const cartItems = getState().cartReducer.cartItems;

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
