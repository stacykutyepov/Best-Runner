import React from "react";
import { connect } from "react-redux";
import { toggleWorkoutWindow } from "../../redux/workouts/workouts.actions";

import AddWorkout from "../add-workout/add-workout-component";
import NewWorkout from "../new-workout-menu/new-workout.component";

const MainPage = ({ hidden, toggleWindow}) => {
  return (
    <div>
      <h1>My Workouts</h1>
      <AddWorkout onClick={toggleWindow}/>
      {hidden ? <NewWorkout/> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { workouts } = state;
  return { hidden: workouts.hidden };
};

const mapDispatchToProps = (dispatch) => ({
    toggleWindow: () => dispatch(toggleWorkoutWindow()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
