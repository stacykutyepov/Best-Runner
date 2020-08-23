import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

const AddWorkout = ({ onClick }) => {
  return (
    <Fab variant="extended" color="primary" aria-label="add" onClick={onClick}>
      <AddIcon />
      Add Workout
    </Fab>
  );
};

AddWorkout.propTypes = {
  onClick: PropTypes.func,
};

export default AddWorkout;
