export const WORKOUT_TYPES = [
  {
    title: "Walk",
    value: "WALK",
  },
  {
    title: "Run",
    value: "RUN",
  },
  {
    title: "Bike",
    value: "BIKE",
  },
  {
    title: "Ski",
    value: "SKI",
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