import React from "react";
import FilterData from "./filter-basic-form.component";
import { connect } from "react-redux";
import { filterByDate } from "../../redux/workouts/workouts.actions";
import FILTER_DATA from "./filter.actions";

const FilterHandler = ({ filterByDate }) => {
  return (
    <div>
      <FilterData dispatchAction={filterByDate} filterData={FILTER_DATA} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterByDate: (date) => dispatch(filterByDate(date)),
});

export default connect(null, mapDispatchToProps)(FilterHandler);