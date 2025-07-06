import { configureStore } from "@reduxjs/toolkit";
import deviceReducer from "../features/devices/deviceSlice";
import installationReducer from "../features/installations/installationSlice";
import visitReducer from "../features/visits/visitSlice";
import contractReducer from "../features/contracts/contractSlice"; 

export const store = configureStore({
  reducer: {
    devices: deviceReducer,
    installations: installationReducer,
    visits: visitReducer,
    contracts: contractReducer, 
  },
});
