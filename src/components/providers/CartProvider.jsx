import { useReducer } from "react";
import { CartContext } from "../context";
import cartReducer from "../reducers/CartReducers";

// Initial State
const initialState = {
  cartItems: [
    { id: 1, name: "Trekarius 35L - Travel bag", price: 165, quantity:1 },
  ],
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };
  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });

  const subTotalValue = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        increaseQuantity,
        decreaseQuantity,
        updateQuantity,
        removeItem,
        subTotalValue
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
