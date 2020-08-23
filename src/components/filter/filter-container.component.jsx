import React from "react";
import FilterData from "./filter-basic-form.component";
import { connect } from "react-redux";
import { filterByData } from "../../redux/workouts/workouts.actions";
import { FILTER_ACTIONS_DATA } from "../../constants";

const FilterHandler = ({ filterByData }) => {
  return (
    <FilterData
      dispatchFilterAction={filterByData}
      filterData={FILTER_ACTIONS_DATA}
      inputId={"filter-input"}
      labelId={"controlled-filter"}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterByData: (date) => dispatch(filterByData(date)),
});

export default connect(null, mapDispatchToProps)(FilterHandler);
