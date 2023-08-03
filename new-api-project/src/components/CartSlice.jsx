import { createSlice } from '@reduxjs/toolkit'


// create a slice that will hold an array of products in the cart with a product id and quantity, and a total price
const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cart: [],
        totalPrice: 0
    },
    reducers: {
        // add a product to the cart
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find(item => item.id === product.id)
            if (!existingProduct) {
                state.cart.push({
                    ...product,
                    quantity: 1
                })
            } else {
                existingProduct.quantity++
            }
            state.totalPrice += product.price
            
        },
        // remove a product from the cart
        removeFromCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find(item => item.id === product.id)
            if (existingProduct.quantity === 1) {
                state.cart = state.cart.filter(item => item.id !== product.id)
            } else {
                existingProduct.quantity--
            }
            state.totalPrice -= product.price
        },
        // clear the cart
        clearCart: (state, action) => {
            state.cart = []
            state.totalPrice = 0
        },
        // increase the quantity of a product in the cart by 1 and update the total price
        increaseQuantity: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find(item => item.id === product.id)
            existingProduct.quantity++
            state.totalPrice += product.price
        },
        // decrease the quantity of a product in the cart by 1 and update the total price
        decreaseQuantity: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cart.find(item => item.id === product.id)
            if (existingProduct.quantity === 1) {
                state.cart = state.cart.filter(item => item.id !== product.id)
            } else {
                existingProduct.quantity--
            }
            state.totalPrice -= product.price
        },
    }
})

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer