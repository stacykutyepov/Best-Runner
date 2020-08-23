import React from "react";
import PropTypes from "prop-types";
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

import FilterHandler from "../../components/filter/filter-container.component";
import AddWorkout from "../../components/add-workout-button/add-workout-button.component";
import NewWorkout from "../../components/new-workout-menu/new-workout.component";
import WorkoutPreview from "../../components/workout-preview/workout-preview.component";

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

MainPage.propTypes = {
  hidden: PropTypes.bool.isRequired,
  workoutItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      distance: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ),
  toggleWindow: PropTypes.func.isRequired,
  deleteWorkout: PropTypes.func.isRequired,
  editWorkout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
