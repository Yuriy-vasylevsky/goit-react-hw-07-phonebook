import axios from 'axios';
import // fetchContactRequest,
// fetchContactSuccess,
// fetchContactError,
// addContactSuccess,
// addContactRequest,
// addContactError,
// delContactSuccess,
// delContactRequest,
// delContactError,
'./contact-action';

import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContact = () => dispatch => {
//   dispatch(fetchContactRequest());

//   axios
//     .get('https://629a26926f8c03a97851b9f2.mockapi.io/contacts')
//     .then(r => dispatch(fetchContactSuccess(r.data)))
//     .catch(error => dispatch(fetchContactError(error)));
// };
// export const addContact = contact => dispatch => {

//   dispatch(addContactRequest());

//   axios
//     .post('https://629a26926f8c03a97851b9f2.mockapi.io/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(contact)))
//     .catch(error => dispatch(addContactError(error)));
// };

// export const delContact = id => dispatch => {
//   dispatch(delContactRequest());

//   axios
//     .delete(`https://629a26926f8c03a97851b9f2.mockapi.io/contacts/${id}`)
//     .then(() => dispatch(delContactSuccess(id)))
//     .catch(error => dispatch(delContactError(error)));
// };

export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://629a26926f8c03a97851b9f2.mockapi.io/contacts',
      );
      return response.data;
    } catch (err) {
      rejectWithValue(alert(err.message));
    }
  },
);

export const addContact = createAsyncThunk(
  'contact/addContact',

  async (contact, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://629a26926f8c03a97851b9f2.mockapi.io/contacts',
        contact,
      );
      return response.data;
    } catch (err) {
      rejectWithValue(alert(err.message));
    }
  },
);

export const delContact = createAsyncThunk(
  'contact/delContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://629a26926f8c03a97851b9f2.mockapi.io/contacts/${id}`,
      );
      return id;
    } catch (err) {
      rejectWithValue(alert(err.message));
    }
  },
);
