export const addNewWorkout = (workoutItems, itemToAdd) => {
    return [...workoutItems, {...itemToAdd, id: workoutItems.length} ]
}