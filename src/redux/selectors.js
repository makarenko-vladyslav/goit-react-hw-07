import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectSearchQuery = (state) => state.filters;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectSearchQuery],
  (contacts, filters) => {
    return contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(filters.name.toLowerCase())
    );
  }
);
