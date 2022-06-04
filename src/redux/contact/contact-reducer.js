import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filters } from '../contact/contact-action';
import { fetchContact, addContact, delContact } from './contact-operations';

const items = createReducer([], {
  // [fetchContactSuccess]: (_, { payload }) => payload,
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [delContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filters]: (_, { payload }) => payload,
});

const counterReducer = combineReducers({
  items,
  filter,
});

export default counterReducer;
