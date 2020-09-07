import React from "react";
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  makeBar,
} from "./bar-chart-illustration.styles";

const __DATA__ = [
  {
    distance: 13,
    colors: ["#ffd847", "#e0a106"],
  },
  {
    distance: 20,
    colors: ["#ff47ab", "#e0064e"],
  },
  {
    distance: 16,
    colors: ["#add9c0", "#1da890"],
  },
  {
    distance: 30,
    colors: ["#cbd9ad", "#7ca81d"],
  },
  {
    distance: 22,
    colors: ["#d9c1ad", "#714511"],
  },
];

const BarChartIllustration = () => {
  return (
    <Container>
      <MainContainer>
        {__DATA__.map(({ distance, colors }, i) => {
          const Bar = makeBar(distance * 2, colors);
          const Num = Number(colors);
          return (
            <BarChartContainer key={i}>
              <Num>{distance} km</Num>
              <Bar />
            </BarChartContainer>
          );
        })}
      </MainContainer>
      <BlackLine />
    </Container>
  );
};

export default BarChartIllustration;
