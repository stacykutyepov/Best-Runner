import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./graph-page.styles";

import {
  getWeekNumber,
  groupedByWeekNumber,
  getPast4Weeks,
} from "./getWeekNumber";
import { makeDataPointForGraph } from "./makeDataPointsForGraph";

import GraphChart from "../bar-chart/bar-chart.component";

const GraphPage = ({ workouts }) => {
  const workoutsArray = workouts.map((w) => {
    const d = new Date(w.date);
    return {
      ...w,
      weekNumber: getWeekNumber(d),
      dayNumber: d.getDay(),
    };
  });

  const workoutsByWeekNumber = groupedByWeekNumber(workoutsArray);

  // let lastWeek = Math.max(...Object.keys(workoutsByWeekNumber));
  let lastWeek = getWeekNumber(new Date())[1];
  let thisMonthWeeks = getPast4Weeks(lastWeek);
  let weeksWithDistance = [];

  for (let weekNum of thisMonthWeeks) {
    let result = new Array(7).fill(0);
    for (let i in workoutsByWeekNumber[weekNum]) {
      const day = workoutsByWeekNumber[weekNum][i].dayNumber;
      result[day] += workoutsByWeekNumber[weekNum][i].distance;
    }
    weeksWithDistance.push(result);
  }

  const dataPointsForGraph = makeDataPointForGraph(weeksWithDistance.reverse());

  return (
    <div>
      <ButtonContainer>
        <Link to="/">
          <Button variant="contained">Back to Workouts</Button>
        </Link>
      </ButtonContainer>
      <GraphChart
        distanceData={dataPointsForGraph}
        title={"Your Weekly Distance Chart"}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { workouts: state.workouts.workoutItems };
};

GraphPage.prototype = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      distance: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
};

export default connect(mapStateToProps)(GraphPage);
