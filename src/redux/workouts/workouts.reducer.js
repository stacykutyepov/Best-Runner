import WorkoutsTypes from "./workouts.types";
import { addNewWorkout, deleteWorkout, editWorkout, filterByData } from './workouts.utils';

const INITIAL_STATE = {
    hidden: false,
    visibilityFilter: "SHOW_ALL",
    workoutItems: []
}

const workoutsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case WorkoutsTypes.TOGGLE_WORKOUT_WINDOW:
            return {
                ...state,
                hidden: !state.hidden
            }
        case WorkoutsTypes.ADD_NEW_WORKOUT:
            return {
                ...state,
                workoutItems: addNewWorkout(state.workoutItems, action.payload)
            }
        case WorkoutsTypes.DELETE_WORKOUT:
            return {
                ...state,
                workoutItems: deleteWorkout(state.workoutItems, action.payload)
            }
        case WorkoutsTypes.EDIT_WORKOUT:
            return {
                ...state,
                workoutItems: editWorkout(state.workoutItems, action.payload)
            }
        case WorkoutsTypes.FILTER_BY_DATA:
            return {
                ...state,
                visibilityFilter: filterByData(action.payload)
            }

        default:
            return state;
    }
};

export default workoutsReducer;