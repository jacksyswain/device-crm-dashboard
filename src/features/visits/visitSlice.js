import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const visitSlice = createSlice({
  name: "visits",
  initialState,
  reducers: {
    addVisit: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addVisit } = visitSlice.actions;
export default visitSlice.reducer;
