import React from "react";
import { Link } from "react-router-dom";
import { WORKOUT_TYPES } from "../../constants/index";
import CustomButton from "../custom-button/custom-button.component";
import BarChartIllustration from "../bar-chart-illustration/bar-chart-illustration.component";

import {
  AppOverviewContainer,
  OverviewContainer,
  IllustrationContainer,
  HeaderTitle,
  ButtonContainer,
} from "./app-overview.styles";
import WorkoutCircle from "../workout-circle-preview/workout-circle.component";

const AppOverview = () => {
  return (
    <OverviewContainer id="explore">
      <HeaderTitle>Here You Can Track All of Your Activities</HeaderTitle>
      <AppOverviewContainer>
        {WORKOUT_TYPES.map((item) => (
          <WorkoutCircle
            key={item.title}
            imageUrl={item.imageUrl}
            type={item.title}
          />
        ))}
      </AppOverviewContainer>

      <IllustrationContainer>
        <HeaderTitle>And See Your Progress</HeaderTitle>
        <BarChartIllustration />
      </IllustrationContainer>
      <ButtonContainer>
        <Link to={"./main"}>
          <CustomButton>Get Started</CustomButton>
        </Link>
      </ButtonContainer>
    </OverviewContainer>
  );
};

export default AppOverview;
