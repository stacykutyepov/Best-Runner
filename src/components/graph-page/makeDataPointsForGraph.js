var DaysOfTheWeek = {
  0: "Mon",
  1: "Tue",
  2: "Wed",
  3: "Thu",
  4: "Fri",
  5: "Sat",
  6: "Sun",
};

export const makeDataPointForGraph = (weeksDistanceArray) => {
  let dataPointsForGraph = [];
  for (let i = 0; i < weeksDistanceArray.length; i++) {
    for (let j = 0; j < weeksDistanceArray[i].length; j++) {
      let value = DaysOfTheWeek[j];
      let newObjData = {};
      newObjData["label"] = value;
      newObjData["y"] = weeksDistanceArray[i][j];
      dataPointsForGraph.push(newObjData);
    }
  }
  return dataPointsForGraph;
}