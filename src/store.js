import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { brandsReducer } from "./features/brand/brandSlice";
import productReducer from "./features/products/productSlice";

import cartReducer from "./features/Cart/cartSlice";

import vendorsReducer from "./features/topVendors/vendorSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    brands: brandsReducer,
    product: productReducer,
    cart: cartReducer,
    vendors: vendorsReducer,
  },
});
export default store;
