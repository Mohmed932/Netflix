import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const APIKEY = "6a206896c77601cb87ebc0c81d2c9ddf";
const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`;
export const Upcome = createAsyncThunk("moves/Upcome", async (_, thunkAPI) => {
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
const getUpcome = createSlice({
  name: "moves",
  initialState,
  extraReducers: {
    [Upcome.pending]: (state, action) => {
      state.loading = true;
    },
    [Upcome.fulfilled]: (state, action) => {
      state.loading = false;
      state.move = action.payload.results;
    },
    [Upcome.rejected]: (state, action) => {
      state.loading = false;
      state.status = true;
    },
  },
});

export default getUpcome.reducer;
