import React from "react";
import { WORKOUT_TYPES } from "../../constants/index";
import { Icon } from "./workout-type-preview.styles";

const TypePreview = ({ type }) => {
  const currentType = WORKOUT_TYPES.filter((item) => item.value === type);
  return (
    <>
      {type ? (
        <Icon src={currentType[0].svg} alt={type} />
      ) : (
        <Icon src="../../assets/icons/question.svg" alt="question" />
      )}
    </>
  );
};

export default TypePreview;
