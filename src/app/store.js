import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import pageReducer from '../features/page/pageSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    page: pageReducer, // assuming you have a pageReducer in the same directory
  },
});

export default store;
 

