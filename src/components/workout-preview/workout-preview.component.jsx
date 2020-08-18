import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import {
  TypesForm,
  DistanceForm,
  DateForm,
  CommentForm,
} from "../forms/workout-types.component";

import {
  PreviewContainer,
  TextItalic,
  Text,
  ButtonsContainer,
  DataContainer,
  TextContainer,
} from "./workout-preview.styles";

const WorkoutPreview = ({ item, deleteWorkout }) => {
  const { date, comment, id, distance, type } = item;
  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState({
    id,
    distance,
    date,
    type,
    comment,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <PreviewContainer>
      {!isEditing ? (
        <TextItalic>
          {values.date} || {values.distance} km || {values.type}
        </TextItalic>
      ) : (
        <TextContainer>
          <DateForm value={values.date} onChange={handleChange("date")} />
          <DistanceForm
            value={values.distance}
            onChange={handleChange("distance")}
          />
          <TypesForm value={values.type} onChange={handleChange("type")} />
        </TextContainer>
      )}

      <DataContainer>
        {!isEditing ? (
          <Text>{values.comment ? values.comment : "add a comment"} </Text>
        ) : (
          <CommentForm
            value={values.comment}
            onChange={handleChange("comment")}
          />
        )}

        <ButtonsContainer>
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? <CheckCircleOutlineIcon /> : <EditIcon />}
          </IconButton>
          <IconButton aria-label="delete" onClick={() => deleteWorkout(item)}>
            <DeleteIcon />
          </IconButton>
        </ButtonsContainer>
      </DataContainer>
    </PreviewContainer>
  );
};

export default WorkoutPreview;
