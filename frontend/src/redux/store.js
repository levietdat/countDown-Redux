import { configureStore } from "@reduxjs/toolkit";
import countDownReducer from './countDownSlice'


const store = configureStore({
    reducer: {
        countDownReducer:countDownReducer,
    }
})
export default store