import React from "react";
import PropTypes from "prop-types";
import {
  TextField,
  InputAdornment,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core/";
import { WORKOUT_TYPES } from "../../constants";

const formPropTypes = {
  onChange: PropTypes.func.isRequired,
};

export const TypesForm = ({ value, onChange }) => {
  return (
    <FormControl>
      <InputLabel htmlFor="type-native">Workout Type</InputLabel>
      <Select native value={value} onChange={onChange}>
        <option aria-label="None" value="" />
        {WORKOUT_TYPES.map((workout) => (
          <option key={workout.value} value={workout.value}>
            {workout.title}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export const DistanceForm = ({ error, value, onChange }) => {
  let helper = "";
  if (error) {
    helper = "provide only numbers; example: 9 or 9.6";
  }

  return (
    <TextField
      label="Distance"
      id="distance"
      value={value}
      onChange={onChange}
      error={error}
      helperText={helper}
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

TypesForm.propTypes = formPropTypes;
DistanceForm.propTypes = formPropTypes;
DateForm.propTypes = formPropTypes;
CommentForm.propTypes = formPropTypes;
