import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputComponent = ({ value, name, label, onChange }) => {
  const handleChange = (e) => {
    onChange({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };
  return (
    <Box sx={{ width: 1 }} autoComplete="off">
      <TextField
        fullWidth
        onChange={handleChange}
        id={`outlined` + `${name}`}
        label={label}
        name={name}
        defaultValue={value}
        variant="outlined"
      />
    </Box>
  );
};

export default InputComponent;
