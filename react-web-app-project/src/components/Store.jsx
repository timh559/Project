import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './LocationSlice'


export default configureStore({
    reducer: {
        location: locationReducer
    }
    
})