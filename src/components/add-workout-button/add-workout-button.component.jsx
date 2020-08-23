import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const AddWorkout = ({ onClick }) => {
  return (
    <Fab variant="extended" color="primary" aria-label="add" onClick={onClick}>
      <AddIcon />
      Add Workout
    </Fab>
  );
};

export default AddWorkout;