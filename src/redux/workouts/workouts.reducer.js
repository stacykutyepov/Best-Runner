import WorkoutsTypes from "./workouts.types";
import { addNewWorkout, deleteWorkout } from './workouts.utils';

const INITIAL_STATE = {
    hidden: false,
    workoutItems: [
        {
            comment: "was a great sunny walk",
            date: "2020-08-18",
            distance: "2",
            id: 0,
            type: "walk",
        }
    ]
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
        default:
            return state;
    }
};

export default workoutsReducer;