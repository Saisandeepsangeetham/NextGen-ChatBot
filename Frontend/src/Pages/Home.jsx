import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import {motion} from "framer-motion"; 
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#112240",
        padding: "20px",
      }}
    >
      {/* Hero Section */}
      <Container>
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: "90vh" }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#ffffff",
                  marginBottom: "20px",
                }}
              >
                Welcome to <span style={{ color: "#ff6f61" }}>NextGen ChatBot</span>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#ffffff",
                  marginBottom: "30px",
                }}
              >
                Your personal AI assistant, ready to help you 24/7.
              </Typography>
              <Button
                variant="contained"
                onClick={handleNavigate}
                sx={{
                  backgroundColor: "#1F6FEB",
                  color: "#fff",
                  padding: "12px 30px",
                  fontSize: "1.1rem",
                  "&:hover": {
                    backgroundColor: "#0a1a7a",
                  },
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Chatbot Illustration"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#091057",
            marginBottom: "40px",
          }}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <ChatBubbleIcon sx={{ fontSize: "3rem", color: "#091057" }} />,
              title: "24/7 Support",
              description: "Our chatbot is always available to assist you.",
            },
            {
              icon: <SmartToyIcon sx={{ fontSize: "3rem", color: "#091057" }} />,
              title: "Smart AI",
              description: "Powered by Gemini 1.5 for accurate responses.",
            },
            {
              icon: <ThumbUpIcon sx={{ fontSize: "3rem", color: "#091057" }} />,
              title: "Easy to Use",
              description: "Simple and intuitive interface for everyone.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Box
                  sx={{
                    backgroundColor: "#f0f4ff",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {feature.icon}
                  <Typography variant="h5" sx={{ margin: "20px 0", color: "#091057" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666" }}>
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
