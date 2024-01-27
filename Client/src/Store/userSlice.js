import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name: 'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
          return action.payload;//it will return user infomation whenever this function is being called 
        },
        removeUser:(state,action)=>{
         return null;
        }
    }
});
export const {addUser, removeUser} =userSlice.actions;
export default userSlice.reducer;