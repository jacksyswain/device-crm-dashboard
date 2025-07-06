import React from "react";
import { useSelector } from "react-redux";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const InstallationList = () => {
  const installations = useSelector(state => state.installations.list);

  return (
    <div>
      <Typography variant="h6">Installation Logs</Typography>
      <List>
        {installations.map(item => (
          <ListItem key={item.id}>
            <ListItemText
              primary={`${item.deviceId} at ${item.facility} on ${item.date}`}
              secondary={`Engineer: ${item.engineer}, Training: ${item.trainingStatus ? "Yes" : "No"}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default InstallationList;
