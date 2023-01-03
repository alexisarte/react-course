import { TYPES } from "../actions/contadorAction";

export const shoppingInitialState = {
  products: [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
  ],
  cart: [],
};

export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case TYPES.REMOVE_ONE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case TYPES.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}