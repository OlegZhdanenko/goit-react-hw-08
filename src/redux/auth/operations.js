import  axios  from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = token => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
const clearAuthHeader = () => {
    axios.defaults.headers.common["Authorization"] = "";
}


export const register = createAsyncThunk("auth/register", async (userInfo,thunkAPI) => {
    try {
        const response = await axios.post("https://connections-api.herokuapp.com/users/signup", userInfo) 
        setAuthHeader(response.data.token)
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
    }
)

export const logIN = createAsyncThunk("auth/login", async (userInfo,thunkAPI) => {
    try {
        const response = await axios.post("https://connections-api.herokuapp.com/users/login", userInfo) 
        setAuthHeader(response.data.token)
    return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
    }
)
export const logOut = createAsyncThunk("auth/logout", async (thunkAPI) => {
    try {
        await axios.post("https://connections-api.herokuapp.com/users/logout") 
        clearAuthHeader()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
}  
)
export const refreshUser = createAsyncThunk("auth/refresh", async (_,thunkAPI) => {
        const {auth:{token}} = thunkAPI.getState();
        setAuthHeader(token)
      const response=  await axios.get("https://connections-api.herokuapp.com/users/current") 
        return response.data
}, {
    condition: (_, { getState }) => {
        const reduxState = getState();
        const savedToken = reduxState.auth.token;
        return savedToken !== null;
    }
}
)