import React, { useState } from "react";
import { connect } from "react-redux";
import { FormContainer, NavContainer, Title } from "./new-workout.styles";
import {
  addWorkout,
  toggleWorkoutWindow,
} from "../../redux/workouts/workouts.actions";
import Fab from "@material-ui/core/Fab";
import {
  TypesForm,
  DistanceForm,
  DateForm,
  CommentForm,
} from "../forms/workout-types.component";
import CloseIcon from "@material-ui/icons/Close";
import AddWorkout from "../add-workout-button/add-workout-button.component";

const NewWorkout = ({ addWorkout, toggleWindow }) => {
  const [values, setValues] = useState({
    id: "",
    distance: 0,
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
      <DistanceForm value={values.distance} onChange={handleChange("distance")} />

      <DateForm value={values.date} onChange={handleChange("date")} />

      <TypesForm value={values.type} onChange={handleChange("type")} />

      <CommentForm onChange={handleChange("comment")} />

      <AddWorkout
        onClick={() => {
          addWorkout(values);
          toggleWindow();
        }}
      />
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addWorkout: (item) => dispatch(addWorkout(item)),
  toggleWindow: () => dispatch(toggleWorkoutWindow()),
});

export default connect(null, mapDispatchToProps)(NewWorkout);
