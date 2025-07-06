import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    addDevice: (state, action) => {
      state.list.push(action.payload);
    },
    deleteDevice: (state, action) => {
      state.list = state.list.filter(d => d.id !== action.payload);
    },
  },
});

export const { addDevice, deleteDevice } = deviceSlice.actions;
export default deviceSlice.reducer;
