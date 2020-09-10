import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

const AddWorkout = ({ onClick, children }) => {
  return (
    <Fab color="primary" variant="extended" aria-label="add" onClick={onClick}>
      <AddIcon />
      {children}
    </Fab>
  );
};

AddWorkout.propTypes = {
  onClick: PropTypes.func,
};

export default AddWorkout;
