import {createSlice} from '@reduxjs/toolkit';

const cart= createSlice({
    name:'todolist',
    initialState:[],
    reducers:{
        addCard: (state, action) => {
            state.push(action.payload)
        },
        deleteCard: (state, action) => {
            state.splice(action.payload, 1)
        },
        updateCart: (state, action) => {
            // Clear the current state and replace it with the updated items
            return action.payload;
        },
        deleteCart: (state, action) => {
          return [];
        }
    }
});

export const {addCard,deleteCard,updateCart,deleteCart}=cart.actions;

export default cart.reducer;