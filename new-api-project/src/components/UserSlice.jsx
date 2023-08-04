import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userLoggedIn: false,
    },
    reducers: {
        setUserLoggedIn: (state, action) => {
            state.userLoggedIn = action.payload;
        }
    }
});

export const { setUserLoggedIn } = userSlice.actions;

export default userSlice.reducer;

