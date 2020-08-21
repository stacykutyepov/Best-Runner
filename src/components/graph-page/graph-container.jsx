import React from "react";
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

import GraphChart from "../graph-chart/graph-chart.component";

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

  let lastWeek = Math.max(...Object.keys(workoutsByWeekNumber));
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

  console.log(makeDataPointForGraph(weeksWithDistance));

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

export default connect(mapStateToProps)(GraphPage);
