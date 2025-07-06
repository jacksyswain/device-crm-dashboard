import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDevice } from "./features/devices/deviceSlice";

// Layout
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// Modules
import DeviceTable from "./features/devices/DeviceTable";
import InstallationForm from "./features/installations/InstallationForm";
import InstallationList from "./features/installations/InstallationList";
import ServiceVisitForm from "./features/visits/ServiceVisitForm";
import ServiceVisitList from "./features/visits/ServiceVisitList";
import ContractForm from "./features/contracts/ContractForm";
import ContractList from "./features/contracts/ContractList";

// MUI
import { Box, Container, CssBaseline, Divider, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;

function App() {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices.list);

  useEffect(() => {
    const exists = devices.some((d) => d.id === "D001");
    if (!exists) {
      dispatch(addDevice({
        id: "D001",
        type: "ECG Machine",
        facility: "Apollo Hospital",
        status: "Online",
        battery: 85,
        lastService: "2025-06-20",
        amcStatus: "Valid",
      }));
    }
  }, [dispatch, devices]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />

        <Typography variant="h5">Inventory</Typography>
        <DeviceTable />

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5">Installations</Typography>
        <InstallationForm />
        <InstallationList />

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5">Service Logs</Typography>
        <ServiceVisitForm />
        <ServiceVisitList />

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5">AMC/CMC Contracts</Typography>
        <ContractForm />
        <ContractList />
      </Box>
    </Box>
  );
}

export default App;
