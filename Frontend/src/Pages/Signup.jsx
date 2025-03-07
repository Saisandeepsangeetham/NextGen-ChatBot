import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { IoIosLogIn } from "react-icons/io";
import CustomizedInput from "../Components/Shared/CustomizedInput";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      toast.loading("Signing In..", { id: "Signup" });
      await auth?.signup(name, email, password);
      toast.dismiss("Signup");
      toast.success("Signed In successfully", { id: "Signup" });
    } catch (error) {
      console.log(error);
      toast.dismiss("Signup");
      toast.error("Signup Failed", { id: "Signup" });
    }
  };

  useEffect(() => {
    if (auth?.user) {
      navigate("/chat");
    }
  }, [auth, navigate]);

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        backgroundColor: "#0A192F",
        padding: "20px",
      }}
    >
      <Box
        display={{ md: "flex", sm: "none", xs: "none" }}
        justifyContent="center"
        alignItems="center"
      >
        <img
          src="airobot.png"
          alt="Robot Image"
          style={{
            width: "450px",
            animation: "float 3s ease-in-out infinite",
          }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#112240",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          paddingBottom="20px"
          fontWeight={700}
          sx={{ fontFamily: "Roboto, sans-serif", color: "white" }}
        >
          Welcome Back!
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <CustomizedInput type="text" name="name" label="Name" />
          <CustomizedInput type="email" name="email" label="Email" />
          <CustomizedInput type="password" name="password" label="Password" />
          <Button
            type="submit"
            sx={{
              px: 2,
              py: 1.5,
              mt: 3,
              width: "100%",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: 2,
              bgcolor: "#007BFF",
              color: "white",
              transition: "transform 0.2s ease-in-out",
              ":hover": {
                bgcolor: "#0056b3",
                color: "white",
                transform: "scale(1.05)",
              },
            }}
            endIcon={<IoIosLogIn />}
          >
            Signup
          </Button>
        </form>
        <Typography
          textAlign="center"
          marginTop="20px"
          sx={{
            fontSize: "14px",
            color: "#8892b0",
          }}
        >
          Already have an account?{" "}
          <span>
            <Link
              to={"/Frontend/src/Pages/Login.tsx"}
              style={{
                color: "#00D1FF",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </span>
        </Typography>
      </Box>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Signup;
