import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as cartApi from "./../api/cart";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    token: null,
  },
  reducers: {
    init: (state, action) => {
      state.items = action.payload.items;
      state.token = action.payload.token;
    },
    add: (state, action) => {
      state.items.push(action.payload);
      //   const isItemInCart = findItemInCart(state, action);
      //   console.log(isItemInCart);
      //   if (
      //     !isItemInCart ||
      //     isItemInCart == undefined ||
      //     isItemInCart.length == 0
      //   ) {
      //     state.items.push(action.payload);
      //   }

      //   if (isItemInCart.length == 1) {
      //     const existingItem = state.items.find(
      //       (item) => item.id == action.payload.id
      //     );
      //     console.log(existingItem);
      //     console.log(existingItem.count);
      //     console.log(1111);

      //     existingItem.count += 1;
      //   }
      console.log(state.items.map((i) => i.title));
      console.log(state.items.map((i) => i.id));
      console.log(state.items.map((i) => i.count));
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      console.log(state.items.map((i) => i.title));
      console.log(state.items.map((i) => i.id));
    },
    change: (state, action) => {
      const isItemInCart = state.items.find((i) => i.id == action.payload.id);
      console.log(isItemInCart);
    },
  },
});

export const { init, add, remove, change } = cartSlice.actions;

export default cartSlice.reducer;

export const cartTotalSelector = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.count, 0);

export const cartHasSelector = (state, id) =>
  state.cart.items.some((pr) => pr.id === id);

export const cartTokenSelector = (state) => state.cart.token;

export const itemCountSelector = (state, id) => {
  const item = state.cart.items.filter((i) => i.id == id);
  console.log(item);
  if (item) {
    return item.count;
  }
};

// function findItemInCart(state, action) {
//   const itemInCart = state.items.map((item) => item.id === action.payload.id);
//   return itemInCart;
// }

export const loadCart = createAsyncThunk(
  "cart/loadCart",
  async (_, thunkApi) => {
    const oldToken = localStorage.getItem("CART_TOKEN");
    const { cart, needUpdate, token } = await cartApi.load(oldToken);

    if (needUpdate) {
      localStorage.setItem("CART_TOKEN", token);
    }

    thunkApi.dispatch(init({ items: cart, token }));
  }
);

export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async (product, thunkApi) => {
    const token = cartTokenSelector(thunkApi.getState());
    const res = await cartApi.add(token, product.id);

    if (res) {
      thunkApi.dispatch(add(product));
    }
  }
);

export const changeCartThunk = createAsyncThunk(
  "cart/changeCart",
  async (product, cnt, thunkApi) => {
    console.log(111);
    const token = cartTokenSelector(thunkApi.getState());
    console.log(222);
    const res = await cartApi.change(token, product.id, cnt);
    console.log(333);
    if (res) {
      thunkApi.dispatch(change(product));
    }
    console.log(444);
  }
);

export const removeFromCartThunk = createAsyncThunk(
  "cart/removeFromCart",
  async (id, thunkApi) => {
    const token = cartTokenSelector(thunkApi.getState());
    const res = await cartApi.remove(token, id);

    if (res) {
      thunkApi.dispatch(remove(id));
    }
  }
);
