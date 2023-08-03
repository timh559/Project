import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductsSlice";
import cartReducer from "./CartSlice";


// create a store that will hold the products and cart slices
const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})

export default store;


