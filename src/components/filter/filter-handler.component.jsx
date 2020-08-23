import React from "react";
import FilterData from "./filter-basic-form.component";
import { connect } from "react-redux";
import { filterByData } from "../../redux/workouts/workouts.actions";
import FILTER_DATA from "./filter.actions";

const FilterHandler = ({ filterByData }) => {
  return (
    <div>
      <FilterData dispatchAction={filterByData} filterData={FILTER_DATA} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterByData: (date) => dispatch(filterByData(date)),
});

export default connect(null, mapDispatchToProps)(FilterHandler);