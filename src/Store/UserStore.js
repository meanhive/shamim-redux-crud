import UserReducer from '../Reducer/UserReducer'
import { configureStore } from '@reduxjs/toolkit'


// assign the name to the store
const userRedu = {
    users: UserReducer
};

// configure store
const store = configureStore({
    reducer: userRedu,
    devTools: true
});

export default store