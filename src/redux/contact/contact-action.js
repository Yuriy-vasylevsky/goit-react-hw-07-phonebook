import { createAction } from '@reduxjs/toolkit';

export const addNumber = createAction('contact/addNumber');
export const delNumber = createAction('contact/delNumber');
export const filters = createAction('contact/filter');

// export const addNumber = obj => ({
//   type: 'contact/addNumber',
//   payload: obj,
// });

// export const delNumber = id => ({
//   type: 'contact/delNumber',
//   payload: id,
// });

// export const filter = value => ({
//   type: 'contact/filter',
//   payload: value,
// });
// export { addNumber, delNumber, filters };
