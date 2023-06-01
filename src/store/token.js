// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    token: null,
  };
  

// ==============================|| SLICE - MENU ||============================== //

const user = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken:(state,action)=>{
            state.token=action.payload
        },
        clearToken:(state)=>{
            state.token=null;
        }
    }
        
});

export default user.reducer;
export const {setToken,clearToken}=user.actions