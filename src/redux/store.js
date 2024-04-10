import { configureStore } from "@reduxjs/toolkit";


import ContactsSlice from "../redux/contactsSlice";
import  selectNameFilter  from "./filtersSlice";


export const store = configureStore({
    reducer: {
        contacts: ContactsSlice,
        filters: selectNameFilter,
    }
});
