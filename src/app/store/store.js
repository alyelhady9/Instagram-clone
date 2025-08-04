"use client"
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/AuthSlice'
import authModalReducer from '../features/AuthModalSlice'
import savesReducer from '../features/savesSlice'
 const store = configureStore({
    reducer: {
        auth : authReducer,
        authModal: authModalReducer,
        saves: savesReducer,
    }
 })


export default store;