import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
export const store = configureStore({
    reducer: {
        todo:todoReducer,
    }
})

export type TStore = ReturnType<typeof store.getState>
export type TDispatch = typeof store.dispatch