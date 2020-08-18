import React from "react";
import { connect } from "react-redux";
import {
  toggleWorkoutWindow,
  deleteWorkout,
} from "../../redux/workouts/workouts.actions";

import AddWorkout from "../add-workout/add-workout-component";
import NewWorkout from "../new-workout-menu/new-workout.component";
import WorkoutPreview from "../workout-preview/workout-preview.component";

const MainPage = ({ hidden, toggleWindow, workoutItems, deleteWorkout }) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <AddWorkout onClick={toggleWindow} />
      {hidden ? <NewWorkout /> : null}
      <h1>Recent Activity</h1>
      {
        workoutItems.length ? workoutItems.map((item) => (
          <WorkoutPreview
            key={item.id}
            item={item}
            deleteWorkout={deleteWorkout}
          />
        ))
        : <span>You dont have any workouts.</span>
      }
     
    </div>
  );
};

const mapStateToProps = (state) => {
  const { workouts } = state;
  return { hidden: workouts.hidden, workoutItems: workouts.workoutItems };
};

const mapDispatchToProps = (dispatch) => ({
  toggleWindow: () => dispatch(toggleWorkoutWindow()),
  deleteWorkout: (item) => dispatch(deleteWorkout(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
