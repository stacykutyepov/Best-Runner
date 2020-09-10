import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import TypePreview from "../workout-type-preview/workout-type-preview.component";
import {
  TypesForm,
  DistanceForm,
  DateForm,
  CommentForm,
} from "../forms/workout-types.component";

import {
  PreviewContainer,
  Text,
  CommentText,
  ButtonsContainer,
  DataContainer,
  TextContainer,
  DistanceNumber,
  Column,
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
          <Column>
            <TypePreview type={values.type} />
            <CommentText>{values.comment ? values.comment : "..."}</CommentText>
          </Column>
          <Column>
            <Text>
              <DistanceNumber>{values.distance}</DistanceNumber>
              km
            </Text>
            <Text>{values.date}</Text>
          </Column>
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

WorkoutPreview.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
  }),
  deleteWorkout: PropTypes.func.isRequired,
  editWorkout: PropTypes.func.isRequired,
};

export default WorkoutPreview;
