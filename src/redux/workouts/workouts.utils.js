export const addNewWorkout = (workoutItems, itemToAdd) => {
    return [...workoutItems, { ...itemToAdd, id: Date.now(), distance: parseInt(itemToAdd.distance) }]
}

export const deleteWorkout = (workoutItems, itemToDelete) => {
    const filteredWorkouts = workoutItems.filter(item => item.id !== itemToDelete.id)
    return [...filteredWorkouts]
}

export const editWorkout = (workoutItems, editedItem) => {
    const filteredWorkouts = workoutItems.filter(item => item.id !== editedItem.id)
    return [...filteredWorkouts, editedItem]
}

export const filterByDate = (workoutItems, filterType) => {
    console.log("this is the type", filterType)

    if (filterType === "newest-oldest") {
        const filteredItems = workoutItems.slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        return [...filteredItems]

    } else if (filterType === "oldest-newest") {
        const filteredItems = workoutItems.slice()
            .sort((a, b) => new Date(a.date) - new Date(b.date));
        return [...filteredItems]
    }

    return [...workoutItems]
}

export const filterByDistance = (workoutItems, filterType) => {
    console.log("this is the type", filterType)
    console.log(workoutItems.distance);

    if (filterType === "max-min") {
        const filteredItems = workoutItems.slice()
            .sort((a, b) => b.distance - a.distance);

        return [...filteredItems]
    } else if (filterType === "min-max") {
        const filteredItems = workoutItems.slice()
            .sort((a, b) => a.distance - b.distance);

        return [...filteredItems]
    }
    return [...workoutItems]
}