import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginRight: "8px" }}>
      <Link to="/">
        <img
          src="logo.jpeg"
          alt="chatbot"
          width="40px"
          height="40px"
          className="image-inverted"
          style={{ borderRadius: "50%" }}
        />
      </Link>
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          marginRight: "auto",
          fontWeight: "800",
          textShadow: "2px 2px 20px #000",
        }}
      >
        <span style={{ fontSize: "25px", marginLeft: "5px", paddingLeft: "5px" }}>
          NextGen
        </span>
      </Typography>
    </div>
  );
};

export default Logo;
