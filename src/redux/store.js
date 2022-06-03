import { combineReducers } from 'redux';
import counterReducer from '../redux/contact/contact-reducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contact: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
