// features/account/accountSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';

// Initial state
const initialState = {
  accountList: [],
  status: 'IDLE', 
};

// Async thunk for creating new account
export const createAccount = createAsyncThunk(
  'account/createAccount',
  async (accountData) => {
    try {
      const response = await api.post('/api/accounts', accountData);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(`Error occured ${error.message}`)
      }
      r
    }
  }
);

const accountSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    resetAccountStatus: (state) => {
      state.status = 'IDLE';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccount.pending, (state) => {
        state.status = 'PENDING';
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.status = 'SUCCEEDED';
        state.accountList.push(action.payload);
      })
      .addCase(createAccount.rejected, (state, action) => {
        state.status = 'FAILED';
      });
    }
});

// Export actions
export const { resetAccountError, setCurrentAccount } = accountSlice.actions;

// Export selectors
export const selectAccounts = (state) => state.accounts.accountList;
export const selectAccountStatus = (state) => state.accounts.status;
export const selectAccountError = (state) => state.accounts.error;


export default accountSlice.reducer;