import React from "react";
import FilterData from "./filter-basic-form.component";
import { connect } from "react-redux";
import {
  filterByDate,
  filterByDistance,
} from "../../redux/workouts/workouts.actions";

// TO IMPROVE: Would be better to create filterData Array and store data with filter description inside different objects. Then to use .map inside filterHandler.
const FilterHandler = ({ filterByDate, filterByDistance }) => {
  return (
    <div>
      <FilterData
        title={"Date"}
        text={"Display by date:"}
        values={["oldest-newest", "newest-oldest"]}
        dispatchAction={filterByDate}
      />
      <FilterData
        title={"Distance"}
        text={"Display by km:"}
        values={["max-min", "min-max"]}
        dispatchAction={filterByDistance}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterByDate: (date) => dispatch(filterByDate(date)),
  filterByDistance: (distance) => dispatch(filterByDistance(distance)),
});

export default connect(null, mapDispatchToProps)(FilterHandler);
