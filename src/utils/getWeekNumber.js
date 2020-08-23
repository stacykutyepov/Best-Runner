export const getWeekNumber = (d) => {
  // Copy date so we don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo];
}

export const groupedByWeekNumber = (arrayOfWorkouts) => {
  return arrayOfWorkouts.reduce((memo, workout) => {
    if (memo[workout.weekNumber[1]] === undefined) {
      memo[workout.weekNumber[1]] = [];
    }
    memo[workout.weekNumber[1]].push(workout);
    return memo;
  }, {});
};

export const getPast4Weeks = (lastWeek) => {
  // should add a handler for monthes of december-january
  const thisMonthWeeks = [];
  for (let i = 0; i < 4; i++) {
    thisMonthWeeks.push(lastWeek - i);
  }
  return thisMonthWeeks;
};
