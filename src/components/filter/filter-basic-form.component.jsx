import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const FilterData = ({ dispatchFilterAction, filterData, inputId, labelId }) => {
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  const [isOpen, setOpen] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setFilter(value);
    dispatchFilterAction(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={inputId}>Filter</InputLabel>
      <Select
        labelId={labelId}
        id={labelId}
        open={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        value={filter}
        onChange={handleChange}
      >
        {filterData.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

FilterData.propTypes = {
  dispatchFilterAction: PropTypes.func.isRequired,
  filterData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  inputId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
};

export default FilterData;
