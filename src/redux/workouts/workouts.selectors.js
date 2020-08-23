import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.workouts.visibilityFilter;

const getWorkouts = (state) => state.workouts.workoutItems;

const makeGetVisibleTodos = () => {
    return createSelector(
        [getVisibilityFilter, getWorkouts],
        (visibilityFilter, workouts) => {

            switch (visibilityFilter) {
                case 'SHOW_ALL':
                    return workouts
                        .slice()
                        .reverse()
                        .sort((a, b) => new Date(b.date) - new Date(a.date))

                case "NEWEST_OLDEST":
                    return workouts.slice()
                        .reverse()
                        .sort((a, b) => new Date(b.date) - new Date(a.date));

                case "OLDEST_NEWEST":
                    return workouts.slice()
                        .sort((a, b) => new Date(a.date) - new Date(b.date));

                case "MAX_MIN":
                    return workouts.slice()
                        .sort((a, b) => b.distance - a.distance);

                case "MIN_MAX":
                    return workouts.slice()
                        .sort((a, b) => a.distance - b.distance);

                default:
                    return workouts.filter(item => item.type === visibilityFilter);
            }
        }
    )
}

export default makeGetVisibleTodos;