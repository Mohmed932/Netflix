import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const APIKEY = "6a206896c77601cb87ebc0c81d2c9ddf";
const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US`;
export const TopRated = createAsyncThunk(
  "moves/TopRated",
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
const geTopRated = createSlice({
  name: "moves",
  initialState,
  extraReducers: {
    [TopRated.pending]: (state, action) => {
      state.loading = true;
    },
    [TopRated.fulfilled]: (state, action) => {
      state.loading = false;
      state.move = action.payload.results;
    },
    [TopRated.rejected]: (state, action) => {
      state.loading = false;
      state.status = true;
    },
  },
});

export default geTopRated.reducer;
