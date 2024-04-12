
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("https://connections-api.herokuapp.com/contacts");
       
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post("https://connections-api.herokuapp.com/contacts", contact);
        
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactsId, thunkAPI) => {
    try {
        const response = await axios.delete(`https://connections-api.herokuapp.com/contacts/${contactsId}`);
        
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});