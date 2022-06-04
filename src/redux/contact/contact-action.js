import { createAction } from '@reduxjs/toolkit';

// export const addNumber = createAction('contact/addNumber');
export const delNumber = createAction('contact/delNumber');
export const filters = createAction('contact/filter');

export const fetchContactRequest = createAction('contact/fetchContactRequest');
export const fetchContactSuccess = createAction('contact/fetchContactSuccess');
export const fetchContactError = createAction('contact/fetchContactError');

export const addContactRequest = createAction('contact/addContactRequest');
export const addContactSuccess = createAction('contact/addContactSuccess');
export const addContactError = createAction('contact/addContactError');

export const delContactRequest = createAction('contact/delContactRequest');
export const delContactSuccess = createAction('contact/delContactSuccess');
export const delContactError = createAction('contact/delContactError');
