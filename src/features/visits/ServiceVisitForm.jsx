import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVisit } from "./visitSlice";
import {
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography,
} from "@mui/material";

const ServiceVisitForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    deviceId: "",
    date: "",
    engineer: "",
    purpose: "Preventive",
    notes: "",
    attachment: null,
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setForm(prev => ({ ...prev, attachment: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addVisit({
      ...form,
      id: Date.now().toString(),
      attachmentName: form.attachment?.name || "",
    }));

    alert("Visit logged!");
    setForm({
      deviceId: "",
      date: "",
      engineer: "",
      purpose: "Preventive",
      notes: "",
      attachment: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Log Service Visit</Typography>
      <TextField
        name="deviceId"
        label="Device ID"
        fullWidth
        value={form.deviceId}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        name="engineer"
        label="Engineer Name"
        fullWidth
        value={form.engineer}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        name="date"
        label="Visit Date"
        type="date"
        fullWidth
        value={form.date}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />

      <RadioGroup
        row
        name="purpose"
        value={form.purpose}
        onChange={handleChange}
      >
        <FormControlLabel value="Preventive" control={<Radio />} label="Preventive" />
        <FormControlLabel value="Breakdown" control={<Radio />} label="Breakdown" />
      </RadioGroup>

      <TextField
        name="notes"
        label="Notes"
        fullWidth
        multiline
        rows={3}
        value={form.notes}
        onChange={handleChange}
        margin="normal"
      />

      <input type="file" accept=".png,.jpg,.pdf" onChange={handleFileChange} />
      <br /><br />
      <Button variant="contained" type="submit">Submit Visit</Button>
    </form>
  );
};

export default ServiceVisitForm;
