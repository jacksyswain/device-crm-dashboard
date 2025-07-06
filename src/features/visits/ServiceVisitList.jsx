import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const ServiceVisitList = () => {
  const visits = useSelector(state => state.visits.list);

  return (
    <div>
      <Typography variant="h6">Service Visit Logs</Typography>
      <List>
        {visits.map(visit => (
          <ListItem key={visit.id} divider>
            <ListItemText
              primary={`${visit.deviceId} | ${visit.date} | ${visit.purpose}`}
              secondary={`Engineer: ${visit.engineer}, Notes: ${visit.notes}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ServiceVisitList;
