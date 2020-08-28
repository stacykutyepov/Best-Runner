export const WORKOUT_TYPES = [
  {
    title: "Walk",
    value: "WALK",
    imageUrl: "https://i.ibb.co/vcNZG6q/walk.png"
  },
  {
    title: "Run",
    value: "RUN",
    imageUrl: "https://i.ibb.co/2MStD01/run.png"
  },
  {
    title: "Bike",
    value: "BIKE",
    imageUrl: "https://i.ibb.co/hB4jLcX/bike.png"
  },
  {
    title: "Ski",
    value: "SKI",
    imageUrl: "https://i.ibb.co/wsFCXvr/ski.png"
  },
]

export const FILTER_ACTIONS_DATA = [
  {
    title: "No Filters",
    value: "SHOW_ALL",
  },
  {
    title: "date: Oldest - Newest",
    value: "OLDEST_NEWEST",
  },
  {
    title: "date: Newest - Oldest",
    value: "NEWEST_OLDEST",
  },
  {
    title: "km: Max - Min",
    value: "MAX_MIN",
  },
  {
    title: "km: Min - Max",
    value: "MIN_MAX",
  },
  ...WORKOUT_TYPES,
];