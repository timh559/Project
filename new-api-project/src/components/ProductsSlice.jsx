import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// fetch all categories
export const fetchCategories = createAsyncThunk(
    'products/fetchCategories',
    async () => {
        const options = {
            method: 'GET',
            url: 'https://fakestoreapi.com/products/categories'
        }
        const response = await axios.request(options);
        return response.data;
    }
)
// fetch all products
export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        const options = {
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        }
        const response = await axios.request(options);
        return response.data;
    }
)
// create a products slice that will hold the categories, products, status, and error
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        categories: [],
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchCategories.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.categories = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(fetchAllProducts.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
});

export const { selectProduct } = productsSlice.actions;

export default productsSlice.reducer;