import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { ButtonContainer, GraphPageContainer } from "./graph-page.styles";
import { convertWorkoutsToBarChartData } from "../../utils/convertWorkoutsToBarChartData";
import GraphChart from "../../components/bar-chart/bar-chart.component";

const GraphPage = ({ workouts }) => {
  const dataPointsForGraph = convertWorkoutsToBarChartData(workouts);
  return (
    <GraphPageContainer>
      <ButtonContainer>
        <Link to="/main">
          <Button variant="contained">Back to Workouts</Button>
        </Link>
      </ButtonContainer>
      <GraphChart
        distanceData={dataPointsForGraph}
        title={"Your Weekly Distance Chart"}
      />
    </GraphPageContainer>
  );
};

const mapStateToProps = (state) => {
  return { workouts: state.workouts.workoutItems };
};

GraphPage.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      distance: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ),
};

export default connect(mapStateToProps)(GraphPage);
