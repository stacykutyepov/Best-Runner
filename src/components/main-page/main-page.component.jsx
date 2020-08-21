import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  toggleWorkoutWindow,
  deleteWorkout,
  editWorkout,
} from "../../redux/workouts/workouts.actions";

import {
  OptionsContainer,
  ButtonContainer,
  Title,
  MainPageContainer,
} from "./main-page.styles";
import Button from "@material-ui/core/Button";
import makeGetVisibleTodos from "../../redux/workouts/workouts.selectors";

import FilterHandler from "../filter/filter-handler.component";
import AddWorkout from "../add-workout-button/add-workout-button.component";
import NewWorkout from "../new-workout-menu/new-workout.component";
import WorkoutPreview from "../workout-preview/workout-preview.component";

const MainPage = ({
  hidden,
  toggleWindow,
  workoutItems,
  deleteWorkout,
  editWorkout,
}) => {
  return (
    <MainPageContainer>
      <Title>Welcome to BestRunner!</Title>
      <AddWorkout onClick={toggleWindow} />
      {hidden ? <NewWorkout /> : null}
      <Title>Recent Activity:</Title>
      <OptionsContainer>
        <FilterHandler />
        <ButtonContainer>
          <Link to="/chart">
            <Button variant="contained">Weekly Chart</Button>
          </Link>
        </ButtonContainer>
      </OptionsContainer>
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
    </MainPageContainer>
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
