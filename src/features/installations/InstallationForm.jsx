import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addInstallation } from "./installationSlice";
import {
  Button,
  TextField,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

const checklistItems = ["Device Unboxed", "Power Tested", "Wi-Fi Configured", "Training Provided"];

const InstallationForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    deviceId: "",
    facility: "",
    engineer: "",
    date: "",
    checklist: [],
    trainingStatus: false,
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (item) => {
    setForm(prev => ({
      ...prev,
      checklist: prev.checklist.includes(item)
        ? prev.checklist.filter(i => i !== item)
        : [...prev.checklist, item],
    }));
  };

  const handleFile = (e) => {
    setForm(prev => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...form,
      id: Date.now().toString(),
      photoName: form.photo?.name || "",
    };

    dispatch(addInstallation(data));
    alert("Installation logged!");
    setForm({
      deviceId: "",
      facility: "",
      engineer: "",
      date: "",
      checklist: [],
      trainingStatus: false,
      photo: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>Log Installation</Typography>
      <TextField label="Device ID" name="deviceId" value={form.deviceId} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Facility" name="facility" value={form.facility} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Engineer" name="engineer" value={form.engineer} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Date" name="date" type="date" value={form.date} onChange={handleChange} fullWidth margin="normal" InputLabelProps={{ shrink: true }} />

      <FormGroup>
        {checklistItems.map(item => (
          <FormControlLabel
            key={item}
            control={<Checkbox checked={form.checklist.includes(item)} onChange={() => handleCheckbox(item)} />}
            label={item}
          />
        ))}
        <FormControlLabel
          control={<Checkbox checked={form.trainingStatus} onChange={(e) => setForm(prev => ({ ...prev, trainingStatus: e.target.checked }))} />}
          label="Training Completed"
        />
      </FormGroup>

      <input type="file" onChange={handleFile} accept="image/*" />
      <br /><br />
      <Button variant="contained" color="primary" type="submit">Submit Installation</Button>
    </form>
  );
};

export default InstallationForm;


