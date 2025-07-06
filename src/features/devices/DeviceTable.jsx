import React from "react";

import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "type", headerName: "Type", flex: 1 },
  { field: "facility", headerName: "Facility", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
  { field: "battery", headerName: "Battery %", flex: 1 },
  { field: "lastService", headerName: "Last Service", flex: 1 },
  { field: "amcStatus", headerName: "AMC/CMC", flex: 1 },
];

const DeviceTable = () => {
  const devices = useSelector((state) => state.devices.list);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={devices} columns={columns} pageSize={5} />
    </div>
  );
};

export default DeviceTable;