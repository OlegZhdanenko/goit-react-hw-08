import { createSlice } from "@reduxjs/toolkit";
import { logIN, logOut, refreshUser, register } from "./operations";

const authSlise = createSlice(
    {
        name: "auth",
        initialState: {
            user: {
                name: null,
                email: null,
            },
            token: null,
            isLoggedIn: false,
            isRefreshing: false,
        },
        extraReducers: builder => builder.addCase(register.fulfilled,( state, action)=> {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        }).addCase(logIN.fulfilled,( state, action)=> {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        }).addCase(logOut.fulfilled,(state)=> {
            state.user = {
                name: null,
                email: null,
            };
            state.items=[]
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
        }).addCase(refreshUser.pending,( state)=> {
            state.isRefreshing=true
        }).addCase(refreshUser.fulfilled,( state, action)=> {
            state.user = action.payload;
            state.isRefreshing=false
            state.isLoggedIn = true;
        })
    }
    

)
export default authSlise.reducer;
