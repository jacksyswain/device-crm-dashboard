import { createSlice } from "@reduxjs/toolkit";

const contractSlice = createSlice({
  name: "contracts",
  initialState: { list: [] },
  reducers: {
    addContract: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addContract } = contractSlice.actions;
export default contractSlice.reducer;
