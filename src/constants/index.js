export const WORKOUT_TYPES = [
  {
    title: "Walk",
    value: "WALK",
    imageUrl: "https://i.ibb.co/vcNZG6q/walk.png",
    svg: "../../assets/icons/walk.svg"
  },
  {
    title: "Run",
    value: "RUN",
    imageUrl: "https://i.ibb.co/2MStD01/run.png",
    svg: "../../assets/icons/run.svg"
  },
  {
    title: "Bike",
    value: "BIKE",
    imageUrl: "https://i.ibb.co/hB4jLcX/bike.png",
    svg: "../../assets/icons/bike.svg"
  },
  {
    title: "Ski",
    value: "SKI",
    imageUrl: "https://i.ibb.co/wsFCXvr/ski.png",
    svg: "../../assets/icons/ski.svg"
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