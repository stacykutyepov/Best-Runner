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

const WorkoutPreview = ({ item, deleteWorkout, editWorkout }) => {
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
        <DataContainer>
          <TextItalic>
            {values.date} || {values.distance} km || {values.type}
          </TextItalic>
          <Text>{values.comment ? values.comment : "add a comment"} </Text>
        </DataContainer>
      ) : (
        <TextContainer>
          <DateForm value={values.date} onChange={handleChange("date")} />
          <DistanceForm
            value={values.distance}
            onChange={handleChange("distance")}
          />
          <TypesForm value={values.type} onChange={handleChange("type")} />
          <CommentForm
            value={values.comment}
            onChange={handleChange("comment")}
          />
        </TextContainer>
      )}

        <ButtonsContainer>
          {isEditing ? (
            <IconButton
              aria-label="done"
              color="primary"
              onClick={() => {
                setIsEditing(!isEditing);
                editWorkout(values);
              }}
            >
              <CheckCircleOutlineIcon />
            </IconButton>
          ) : (
            <IconButton
              aria-label="edit"
              color="primary"
              onClick={() => setIsEditing(!isEditing)}
            >
              <EditIcon />
            </IconButton>
          )}

          <IconButton aria-label="delete" onClick={() => deleteWorkout(item)}>
            <DeleteIcon />
          </IconButton>
          
        </ButtonsContainer>
    </PreviewContainer>
  );
};

export default WorkoutPreview;
