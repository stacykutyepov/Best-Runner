import { getPast4Weeks, getWeekNumber, groupedByWeekNumber } from './getWeekNumber'
import { makeDataPointForGraph } from './makeDataPointsForGraph'

export const convertWorkoutsToBarChartData = (workouts) => {

    const workoutsArray = workouts.map((w) => {
        const d = new Date(w.date);
        return {
            ...w,
            weekNumber: getWeekNumber(d),
            dayNumber: d.getDay(),
        };
    });

    const workoutsByWeekNumber = groupedByWeekNumber(workoutsArray);
    const lastWeek = getWeekNumber(new Date())[1];
    const thisMonthWeeks = getPast4Weeks(lastWeek);
    const weeksWithDistance = [];

    for (let weekNum of thisMonthWeeks) {
        const week = new Array(7).fill(0);
        for (let i in workoutsByWeekNumber[weekNum]) {
            const day = workoutsByWeekNumber[weekNum][i].dayNumber;
            week[day] += workoutsByWeekNumber[weekNum][i].distance;
        }
        weeksWithDistance.push(week);
    }

    const dataPointsForGraph = makeDataPointForGraph(weeksWithDistance.reverse());
    return dataPointsForGraph;
}