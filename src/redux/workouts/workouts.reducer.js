import WorkoutsTypes from "./workouts.types";
import { addNewWorkout } from './workouts.utils';

const INITIAL_STATE = {
    hidden: false,
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
        default:
            return state;
    }
};

export default workoutsReducer;