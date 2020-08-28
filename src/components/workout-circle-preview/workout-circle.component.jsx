import React from "react";

import { IconContainer, Image, Title } from "./workout-circle.styles";

export const WorkoutCirle = ({ imageUrl, type }) => {
  return (
    <IconContainer>
      <Image src={imageUrl} alt={type} />
      <Title>{type}</Title>
    </IconContainer>
  );
};
export default WorkoutCirle;
