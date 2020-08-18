import React from "react";

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

const FilterData = ({ dispatchAction, values, title, text }) => {
  const classes = useStyles();
  const [date, setFilter] = React.useState("");
  const [open, setOpen] = React.useState(false);

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
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{title}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={date}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>{text}</em>
          </MenuItem>
          {values.map((value, index) => (
            <MenuItem key={index} value={`${value}`}>
              {value}
            </MenuItem>
          ))}
          {/* <MenuItem value={"oldest-newest"}>oldest - newest</MenuItem>
          <MenuItem value={"newest-oldest"}>newest - oldest</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterData;
