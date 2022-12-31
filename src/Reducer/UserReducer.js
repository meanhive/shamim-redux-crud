import { createSlice } from '@reduxjs/toolkit'
import { createUser, retriveUsers, deleteUser, updateUser } from '../Action/UserAction'

const initialState = [];

// reducer slices -> logic
const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [createUser.fulfilled]: (state,action) => {
            console.log('reducer payload =', action.payload);
            state.push(action.payload)
        },
        [retriveUsers.fulfilled]: (state,action) => {
            return [...action.payload]
        },
        [updateUser.fulfilled]: (state,action) => {
            // to find existing index of the user object
            const index = state.findIndex(user => user.id === action.payload.id)
            state[index] = {
                ...state[index],
                ...action.payload
            }
        },
        [deleteUser.fulfilled]: (state,action) => {
            // 
            let index = state.findIndex(user => user.id === action.payload.id )
                state.splice(index,1) // remove the value from state
        }
    }
})


const { reducer } = userSlice

export default reducer
