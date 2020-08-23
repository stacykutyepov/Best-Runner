import WorkoutsTypes from "./workouts.types";

export const toggleWorkoutWindow = () => ({
    type: WorkoutsTypes.TOGGLE_WORKOUT_WINDOW
})

export const addWorkout = (item) => ({
    type: WorkoutsTypes.ADD_NEW_WORKOUT,
    payload: item
})

export const deleteWorkout = (item) => ({
    type: WorkoutsTypes.DELETE_WORKOUT,
    payload: item
})

export const editWorkout = (item) => ({
    type: WorkoutsTypes.EDIT_WORKOUT,
    payload: item
})

export const filterByData = (filterType) => ({
    type: WorkoutsTypes.FILTER_BY_DATA,
    payload: filterType
})