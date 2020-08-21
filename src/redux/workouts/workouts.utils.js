export const addNewWorkout = (workoutItems, itemToAdd) => {
    return [...workoutItems, { ...itemToAdd, id: Date.now(), distance: parseInt(itemToAdd.distance) }]
}

export const deleteWorkout = (workoutItems, itemToDelete) => {
    const filteredWorkouts = workoutItems.filter(item => item.id !== itemToDelete.id)
    return [...filteredWorkouts]
}

export const editWorkout = (workoutItems, editedItem) => {
    const filteredWorkouts = workoutItems.filter(item => item.id !== editedItem.id)
    return [...filteredWorkouts, { ...editedItem, distance: parseInt(editedItem.distance) }]
}

export const filterByDate = (filterType) => {
    return filterType
}