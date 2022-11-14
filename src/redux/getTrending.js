import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const APIKEY = "6a206896c77601cb87ebc0c81d2c9ddf";
const URL = `
https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
export const Trend = createAsyncThunk("moves/Trend", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const req = await fetch(URL);
    const res = await req.json();
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = { move: [], status: false, loading: false };
const getTrend = createSlice({
  name: "moves",
  initialState,
  extraReducers: {
    [Trend.pending]: (state, action) => {
      state.loading = true;
    },
    [Trend.fulfilled]: (state, action) => {
      state.loading = false;
      state.move = action.payload.results;
    },
    [Trend.rejected]: (state, action) => {
      state.loading = false;
      state.status = true;
    },
  },
});

export default getTrend.reducer;
