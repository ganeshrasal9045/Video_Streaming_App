import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    // actions
    cacheResults: (state, action) => {
    //   state = Object.assign(state, action.payload);
        // state = {...state, ...action.payload}
        // return state;
        return{...state, ...action.payload}
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
