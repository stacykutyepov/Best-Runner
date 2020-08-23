import React from "react";
import CanvasJSReact from "./canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GraphChart extends React.Component {
  render() {
    const { distanceData, title } = this.props;

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
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
        <CanvasJSChart
          options={options}
        //   onRef={ref => this.chart = ref}
        />
      </div>
    );
  }
}

export default GraphChart;
