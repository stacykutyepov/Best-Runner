import React from "react";
import CanvasJSReact from "./canvasjs.react";
import PropTypes from "prop-types";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart = ({ distanceData, title }) => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: title,
    },
    axisY: {
      labelFontSize: 20,
      includeZero: true,
    },
    axisX: {
      labelAngle: -90,
      interval: 1,
    },
    data: [
      {
        type: "column",
        indexLabel: "{y}",
        dataPoints: distanceData,
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

BarChart.propTypes = {
  distanceData: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

export default BarChart;
