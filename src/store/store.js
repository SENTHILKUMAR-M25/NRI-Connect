// store.js
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../slice/Employee';
import  propertyReducer  from '../slice/Property';
import  UserReducer  from '../slice/User';

export const store = configureStore({
  reducer: {
     property: propertyReducer,
     userinfo:UserReducer,
     employee: employeeReducer,
   
  },
});