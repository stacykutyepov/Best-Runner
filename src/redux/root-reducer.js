import { combineReducers } from 'redux';

import workoutsReducer from './workouts/workouts.reducer';

export default combineReducers({
    workouts: workoutsReducer
})