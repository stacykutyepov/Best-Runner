import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addWorkout,
  toggleWorkoutWindow,
} from "../../redux/workouts/workouts.actions";

import {
  TextField,
  InputAdornment,
  InputLabel,
  FormControl,
  Select,
  Fab
} from "@material-ui/core/";

import { FormContainer, NavContainer, Title } from "./new-workout.styles";
import CloseIcon from "@material-ui/icons/Close";

import AddWorkout from '../add-workout/add-workout-component';

const NewWorkout = ({ addWorkout, toggleWindow }) => {
  const [values, setValues] = useState({
    id: "",
    distance: "",
    date: new Date().toISOString().split("T")[0],
    type: "",
    comment: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <FormContainer>
      <NavContainer>
        <Title>New Workout</Title>
        <Fab
          size="small"
          variant="extended"
          aria-label="add"
          onClick={toggleWindow}
        >
          <CloseIcon />
        </Fab>
      </NavContainer>
      <TextField
        label="Distance"
        id="distance"
        onChange={handleChange("distance")}
        InputProps={{
          startAdornment: <InputAdornment position="start">km</InputAdornment>,
        }}
      />

      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue={values.date}
        onChange={handleChange("date")}
      />

      <FormControl>
        <InputLabel htmlFor="type-native">Workout Type</InputLabel>
        <Select native value={values.type} onChange={handleChange("type")}>
          <option aria-label="None" value="" />
          <option value={"walk"}>Walk</option>
          <option value={"run"}>Run</option>
          <option value={"bike"}>Bike</option>
          <option value={"ski"}>Ski</option>
        </Select>
      </FormControl>

      <TextField
        id="add-comment"
        onChange={handleChange("comment")}
        label="Add a Comment"
        multiline
        rows={4}
        variant="outlined"
      />
      <AddWorkout onClick={() => {
          addWorkout(values);
          toggleWindow();
        }}/>
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addWorkout: (item) => dispatch(addWorkout(item)),
  toggleWindow: () => dispatch(toggleWorkoutWindow()),
});

export default connect(null, mapDispatchToProps)(NewWorkout);
