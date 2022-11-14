import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const APIKEY = "6a206896c77601cb87ebc0c81d2c9ddf";
const URL = `
https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;
export const Popular = createAsyncThunk(
  "moves/Popular",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const req = await fetch(URL);
      const res = await req.json();
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = { move: [], status: false, loading: false };
const getPopular = createSlice({
  name: "moves",
  initialState,
  extraReducers: {
    [Popular.pending]: (state, action) => {
      state.loading = true;
    },
    [Popular.fulfilled]: (state, action) => {
      state.loading = false;
      state.move = action.payload.results;
    },
    [Popular.rejected]: (state, action) => {
      state.loading = false;
      state.status = true;
    },
  },
});

export default getPopular.reducer;
