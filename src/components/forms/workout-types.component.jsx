import React from "react";
import {
  TextField,
  InputAdornment,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core/";

export const TypesForm = ({ value, onChange }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="type-native">Workout Type</InputLabel>
      <Select native value={value} onChange={onChange}>
        <option aria-label="None" value="" />
        <option value={"walk"}>Walk</option>
        <option value={"run"}>Run</option>
        <option value={"bike"}>Bike</option>
        <option value={"ski"}>Ski</option>
      </Select>
    </FormControl>
  );
};

export const DistanceForm = ({ value, onChange }) => {
  return (
    <TextField
      label="Distance"
      id="distance"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: <InputAdornment position="start">km</InputAdornment>,
      }}
    />
  );
};

export const DateForm = ({ value, onChange }) => {
  return (
    <TextField
      label="Date"
      id="date"
      value={value}
      type="date"
      onChange={onChange}
    />
  );
};

export const CommentForm = ({ value, onChange }) => {
  return (
    <TextField
      id="add-comment"
      value={value}
      onChange={onChange}
      label="Your Comment"
      multiline
      rowsMax={4}
      variant="outlined"
    />
  );
};