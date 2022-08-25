import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  countDownDate: [],
};

const countDownDateSlice = createSlice({
  name: "countdown",
  initialState,
  reducers: {
    // countdown: (state, action) => {
    //   const nowDateMiliseconds = new Date();
    //   console.log(state.countDownDate, action);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountDown.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchCountDown.fulfilled, (state, action) => {
      state.status = "idle";
      state.countDownDate = action.payload;
    });
    builder.addCase(addCountDown.fulfilled, (state, action) => {
      state.status = "addCountDown";
      state.countDownDate.push(action.payload);
    })
  },
});

export const fetchCountDown = createAsyncThunk("fetchCountDown", async () => {
  const res = await fetch("http://localhost:5000/countdown");
  const data = res.json();
  return data;
});
export const addCountDown = createAsyncThunk("addCountDown", async (newCountDown) => {
  const res = await fetch("http://localhost:5000/countdown", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',   
    },
    body: JSON.stringify(newCountDown)
  });
  const data = await res.json();
  return data
});
export const { countdown } = countDownDateSlice.actions;
export default countDownDateSlice.reducer;
