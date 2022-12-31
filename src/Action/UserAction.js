import UserApi from '../API/UserApi'
import { createAsyncThunk } from '@reduxjs/toolkit'

//createAsyncThunk(action const, callback function)

//to create new user
    export const createUser = createAsyncThunk("users/create", async (user) => {
        console.log('payload =', user)
        const res = await UserApi.create(user)
        return res.data
    })

// to read all user
    export const retriveUsers = createAsyncThunk("users/retrive", async () => {
        const res = await UserApi.getAll();
        return res.data.users
    })

// to update user
    export const updateUser = createAsyncThunk("users/update", async ({user, id}) => {
        const res = await UserApi.update(user,id)
        return res.data
    })

// to delete user
    export const deleteUser = createAsyncThunk("users/delete", async ({id}) => {
        await UserApi.delete(id)
        return { id }
    })