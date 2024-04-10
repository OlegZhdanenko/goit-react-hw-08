import { createSlice ,createSelector} from "@reduxjs/toolkit";

import { fetchContacts ,deleteContact,addContact} from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const slice = createSlice(
    {
        name: "contacts",
        initialState: {
                items: [],
                loading: false,
                error: null
        },
        extraReducers: builder => {
            builder
                .addCase(fetchContacts.pending, (state) => {
                    state.loading = true;
            }).addCase(fetchContacts.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = null;
                    state.items = action.payload
            }).addCase(fetchContacts.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
            })
                .addCase(deleteContact.pending, (state) => {
                    state.loading = true;
            }).addCase(deleteContact.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = null;
                    const index = state.items.findIndex(
                    task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
            }).addCase(deleteContact.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
            })
            .addCase(addContact.pending, (state) => {
                    state.loading = true;
            }).addCase(addContact.fulfilled, (state, action) => {
                    state.loading = false;
                    state.error = null;
                    state.items.push(action.payload);
            }).addCase(addContact.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload;
            })
        }
        
    }
)

export default slice.reducer;
export const selectContacts = (state) => state.contacts.items;


export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
   ( contacts,filterName) => {
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
})