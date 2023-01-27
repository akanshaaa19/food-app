import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { showCart: false, showAuth: false },
  reducers: {
    showCart(state, action) {
      state.showCart = action.payload;
    },
    showAuth(state, action) {
      state.showAuth = action.payload;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalCost: 0 },
  reducers: {
    removeItem(state, action) {
      const name = action.payload;
      const existingItem = state.cartItems.find((item) => item.name === name);
      state.totalCost = state.totalCost - existingItem.price;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => {
          return item.name !== name;
        });
      } else {
        existingItem.quantity--;
      }
    },
    addItem(state, action) {
      const newItem = action.payload;
      let totalCost;

      const existingItem = state.cartItems.find((item) => {
        return item.name === newItem.name;
      });
      if (state.cartItems.length === 0 && !existingItem) {
        state.totalCost = newItem.price;
      } else {
        state.totalCost = state.totalCost + newItem.price;
      }
      if (!existingItem) {
        state.cartItems.push({
          name: newItem.name,
          src: newItem.src,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
      state.cartItems.forEach((item) => {
        totalCost = totalCost + item.price;
      });
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { name: "", email: "", token: null, isLoggedIn: false },
  reducers: {
    check(state, action){
      if(action.payload){
        state.isLoggedIn = true
      }
    },
    signUp(state, action) {
      const payload = action.payload;
      state.name = payload.name;
      state.email = payload.email;
      state.token = payload.token;
      localStorage.setItem("token", state.token);
        state.isLoggedIn = true;
      
    },
    signIn(state, action) {
      const payload = action.payload;
      state.email = payload.email;
      state.token = payload.token;
      localStorage.setItem("token", state.token);
        state.isLoggedIn = true;
      
    },
    signOut(state) {
      state.token = null;
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;
export const authActions = authSlice.actions;
export default store;
