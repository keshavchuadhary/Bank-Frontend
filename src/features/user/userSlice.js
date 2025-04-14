import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api/api';

const initialState = {
    user: JSON.parse(sessionStorage.getItem('user')),
    status: 'idle'
}

export const registerUser = createAsyncThunk("user/registerUser", async (userDetails) =>{
    try{
        const{data, error} = await api.post('/register', userDetails)
        if(error){
            throw new Error(error);
        }
        return data;
        }catch(err){
            console.error(err);
            return err;
        }
    }

)

export const authenticateUser = createAsyncThunk(
  "user/authenticateUser",
  async (userDetails) => {
    try{
        const {data,headers, error} = await api.post('/user/auth', userDetails);
        if(error) throw error;
        const {authorization} = headers
        sessionStorage.setItem('acces_token', authorization);
        console.log(`authorization header: ${JSON.stringify(headers)}`)
        console.log(`JWT token value`, JSON.stringify(data))
        return data;
    }catch(err){
        console.log(err);
        throw err;
    }
  }
);




export const userSlice = createSlice({
      name: 'user',
      initialState,
      reducers: {
          resetStatus: (state) => {
              state.status = 'idle';
            }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'PENDING';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'SUCCESS';
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'FAILED';
                console.error(action.error);
            })
            .addCase(authenticateUser.pending, (state) => {
                state.status = 'PENDING';
            })
            .addCase(authenticateUser.fulfilled, (state, action) => {
                state.status = 'SUCCESS';
                state.user = action.payload;
            })
            .addCase(authenticateUser.rejected, (state, action) => {
                state.status = 'FAILED';
                console.error(action.error);
            });
    }
})

export const { resetStatus } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectUserStatus = (state) => state.user.status;

export default userSlice.reducer;