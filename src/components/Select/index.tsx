import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMui,
  SelectChangeEvent,
} from "@mui/material";
import { FC } from "react";

import { ISelect } from "./Select.typings";

const Select: FC<ISelect> = (props) => {
  const { label, value, setValue, size = "small", options } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size={size}>
      <InputLabel id="mui-select">{label}</InputLabel>
      <SelectMui
        labelId="mui-select"
        id="mui-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((elem) => (
          <MenuItem value={elem.value} key={elem.value}>
            {elem.label}
          </MenuItem>
        ))}
      </SelectMui>
    </FormControl>
  );
};

export default Select;
