import React, { useState } from "react";
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

const FilterData = ({ dispatchAction, filterData }) => {
  const classes = useStyles();
  const [date, setFilter] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setFilter(event.target.value);
    dispatchAction(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="filter-input">Filter</InputLabel>
      <Select
        labelId="controlled-filter"
        id="controlled-filter"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={date}
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

export default FilterData;
