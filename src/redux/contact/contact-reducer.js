import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addNumber, delNumber, filters } from '../contact/contact-action';

const initState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
];

const items = createReducer(initState, {
  [addNumber]: (state, { payload }) => [...state, payload],
  [delNumber]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filters]: (_, { payload }) => payload,
});

// const items = (state = initState, { type, payload }) => {
//   switch (type) {
//     case 'contact/addNumber':
//       return [...state, payload];

//     case 'contact/delNumber':
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'contact/filter':
//       return payload;
//     default:
//       return state;
//   }
// };

const counterReducer = combineReducers({
  items,
  filter,
});

export default counterReducer;
