import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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
      });
    builder
      .addCase(addContact.pending, state => {
        handlePending(state);
      })
      .addCase(addContact.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(addContact.fulfilled, (state, action) => {
        resetState(state);
        state.contacts.push(action.payload);
      });
    builder
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

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['token'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
