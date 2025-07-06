import React from "react";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import dayjs from "dayjs";

const ContractList = () => {
  const contracts = useSelector((state) => state.contracts.list);

  const today = dayjs();
  const expiringSoon = (endDate) => {
    const daysLeft = dayjs(endDate).diff(today, "day");
    return daysLeft <= 30;
  };

  return (
    <div>
      <Typography variant="h6">AMC/CMC Contracts</Typography>
      <List>
        {contracts.map((contract) => (
          <ListItem
            key={contract.id}
            divider
            sx={{
              backgroundColor: expiringSoon(contract.endDate)
                ? "#fff3cd"
                : "inherit",
            }}
          >
            <ListItemText
              primary={`${contract.deviceId} (${contract.contractType})`}
              secondary={`Vendor: ${contract.vendor} | ${contract.startDate} to ${contract.endDate}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ContractList;
