import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectIsError = state => state.contacts.isError;
// export const selectFilter = (state) => state.contacts.filter;
export const selectFilter = state => state.filters.name;

export const selectFilteredContactsMemo = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number && contact.number.includes(filter.toLowerCase())
    )
);