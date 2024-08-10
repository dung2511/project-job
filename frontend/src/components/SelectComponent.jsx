import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";
const SelectComponent = ({ value, name, label, option, onChange }) => {
  const handleChange = (e) => {
    onChange({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };
  return (
    <Box sx={{ width: 1 }}>
      <FormControl fullWidth>
        <InputLabel id={`${name}` + `-select-label`}>{label}</InputLabel>
        <Select
          fullWidth
          className="w-full"
          labelId={`${name}` + `-select-label`}
          id="demo-simple-select"
          value={value}
          name={name}
          onChange={handleChange}
          label={label}
        >
          {option &&
            option.map((item, index) => {
              return (
                <MenuItem value={item.name} key={index}>
                  {item.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
