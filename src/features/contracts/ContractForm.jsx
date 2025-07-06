import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContract } from "./contractSlice";
import {
  TextField,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

const contractTypes = ["AMC", "CMC"];

export const ContractForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    deviceId: "",
    contractType: "AMC",
    vendor: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addContract({
        ...form,
        id: Date.now().toString(),
      })
    );

    alert("Contract added!");
    setForm({
      deviceId: "",
      contractType: "AMC",
      vendor: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Add AMC/CMC Contract</Typography>

      <TextField
        label="Device ID"
        name="deviceId"
        value={form.deviceId}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Contract Type"
        name="contractType"
        value={form.contractType}
        onChange={handleChange}
        select
        fullWidth
        margin="normal"
      >
        {contractTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Vendor"
        name="vendor"
        value={form.vendor}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        value={form.startDate}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
      />

      <TextField
        label="End Date"
        name="endDate"
        type="date"
        value={form.endDate}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
      />

      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Add Contract
      </Button>
    </form>
  );
};

export default ContractForm;
