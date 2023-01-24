import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const resetState = state => {
  state.isLoading = false;
  state.error = '';
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: '',
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        handlePending(state);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        resetState(state);
        state.contacts = action.payload;
      })
      .addCase(addContact.pending, state => {
        handlePending(state);
      })
      .addCase(addContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        resetState(state);
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.pending, state => {
        handlePending(state);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        resetState(state);
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
