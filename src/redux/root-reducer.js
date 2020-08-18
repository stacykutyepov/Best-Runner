import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import workoutsReducer from './workouts/workouts.reducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["workouts"]
}

const rootReducer = combineReducers({
    workouts: workoutsReducer
});

export default persistReducer(persistConfig, rootReducer);
