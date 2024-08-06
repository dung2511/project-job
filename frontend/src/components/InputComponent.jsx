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
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={handleChange}
        id={`outlined` + `${name}`}
        label={label}
        name={name}
        value={value}
        variant="outlined"
      />
    </Box>
  );
};

export default InputComponent;
