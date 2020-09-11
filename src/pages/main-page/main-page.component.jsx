import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

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
  orangeTheme,
} from "./main-page.styles";
import Button from "@material-ui/core/Button";
import makeGetVisibleTodos from "../../redux/workouts/workouts.selectors";

import FilterHandler from "../../components/filter/filter-container.component";
import AddWorkout from "../../components/add-workout-button/add-workout-button.component";
import NewWorkout from "../../components/new-workout-menu/new-workout.component";
import WorkoutPreview from "../../components/workout-preview/workout-preview.component";
import NoWorkout from "../../components/workout-preview/no-workout.component";

const MainPage = ({
  hidden,
  toggleWindow,
  workoutItems,
  deleteWorkout,
  editWorkout,
}) => {
  return (
    <MuiThemeProvider theme={orangeTheme}>
      <MainPageContainer>
        {hidden ? <NewWorkout /> : null}
        <ButtonContainer>
          <AddWorkout onClick={toggleWindow} />
        </ButtonContainer>
        <Title>Activities:</Title>
        <OptionsContainer>
          <FilterHandler />
          <Link to="/chart">
            <Button variant="outlined">Chart</Button>
          </Link>
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
          <NoWorkout />
        )}
      </MainPageContainer>
    </MuiThemeProvider>
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
