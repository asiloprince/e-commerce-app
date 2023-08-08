export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
          // Calculating...
      // item price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (acc, item) => (acc = item.price * item.quantity),
          0
        )
      );

      // shipping price (if order is over P499 then free, else P50 shipping fee)
      state.shippingPrice = addDecimals(state.itemsPrice >= 20 ? 0 : 50);

      // tax price (20% tax)
      state.taxPrice = addDecimals(Number((0.2 * state.itemsPrice).toFixed(2)));

      // total price
      state.totalPrice =
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice).toFixed(2);
      localStorage.setItem("cart", JSON.stringify(state));

      return state
};
