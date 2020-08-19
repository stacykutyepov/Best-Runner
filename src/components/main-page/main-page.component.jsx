import React from "react";
import { connect } from "react-redux";
import {
  toggleWorkoutWindow,
  deleteWorkout,
  editWorkout,
} from "../../redux/workouts/workouts.actions";
import FilterHandler from "../filter/filter-handler.component";
import AddWorkout from "../add-workout/add-workout-component";
import NewWorkout from "../new-workout-menu/new-workout.component";
import WorkoutPreview from "../workout-preview/workout-preview.component";

import makeGetVisibleTodos from '../../redux/workouts/workouts.selectors'

const MainPage = ({
  hidden,
  toggleWindow,
  workoutItems,
  deleteWorkout,
  editWorkout,
}) => {

  return (
    <div>
      <h1>Welcome!</h1>
      <AddWorkout onClick={toggleWindow} />
      {hidden ? <NewWorkout /> : null}
      <h1>Recent Activity</h1>

      <FilterHandler />

      {workoutItems.length ? (
        workoutItems.map((item) => (
          <WorkoutPreview
            key={item.id}
            item={item}
            deleteWorkout={deleteWorkout}
            editWorkout={editWorkout}
          />
        ))
      ) : (
        <span>You dont have any workouts.</span>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { workouts } = state;
  return {
    hidden: workouts.hidden,
    workoutItems: makeGetVisibleTodos()(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleWindow: () => dispatch(toggleWorkoutWindow()),
  deleteWorkout: (item) => dispatch(deleteWorkout(item)),
  editWorkout: (item) => dispatch(editWorkout(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
