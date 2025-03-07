import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./Shared/Logo";
import { useAuth } from "../Context/AuthContext";
import NavigationLink from "./Shared/NavigationLink";

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{ backgroundColor: "#091057", position: "static", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <div>
          {auth?.isLoggedIn ? ( // Fixed `isloggedIn` to `isLoggedIn`
            <>
              <NavigationLink
                bg="#1F6FEB"
                to="/chat"
                text="Go to Chat"
                textcolor="white"
              />
              <NavigationLink
                onClick={auth.logout}
                bg="#00d1ff"
                to="/"
                textcolor="white"
                text="Logout"
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#1F6FEB"
                to="/Login"
                text="Login"
                textcolor="white"
              />
              <NavigationLink
                bg="#00D1FF"
                to="/Signup"
                text="Signup"
                textcolor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
