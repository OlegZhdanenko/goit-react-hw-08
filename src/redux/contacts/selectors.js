import { selectNameFilter } from "../filters/selectors.js";
import { createSelector} from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter],
        (contacts, filterName) => {
                return contacts.filter((contact) =>
                        contact.name.toLowerCase().includes(filterName.toLowerCase())
                )
        });