import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const installationSlice = createSlice({
  name: "installations",
  initialState,
  reducers: {
    addInstallation: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addInstallation } = installationSlice.actions;
export default installationSlice.reducer;
