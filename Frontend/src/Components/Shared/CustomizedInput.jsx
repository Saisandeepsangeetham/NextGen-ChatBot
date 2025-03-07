import React from "react";
import { TextField } from "@mui/material";

const CustomizedInput = ({ name, type, label }) => {
  return (
    <TextField
      margin="normal"
      name={name}
      label={label}
      type={type}
      sx={{
        width: "400px",
        "& .MuiInputLabel-root": { color: "white" }, // Styles the label
        "& .MuiInputBase-input": { fontSize: 15, color: "white" }, // Styles the input text
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
        },
      }}
    />
  );
};

export default CustomizedInput;
