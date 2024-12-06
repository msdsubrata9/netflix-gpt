import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSearchedMovieNames: null,
    gptSearchedMovieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchedMovieResults: (state, action) => {
      const { gptSearchedMovieNames, gptSearchedMovieResults } = action.payload;
      state.gptSearchedMovieNames = gptSearchedMovieNames;
      state.gptSearchedMovieResults = gptSearchedMovieResults;
    },
  },
});

export const { toggleGptSearchView, addGptSearchedMovieResults } =
  gptSlice.actions;
export default gptSlice.reducer;
