import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../Context/AuthContext";

const ChatItem = ({ content, role }) => {
  const auth = useAuth();

  const getInitials = () => {
    if (auth?.user?.name) {
      const names = auth.user.name.trim().split(" ");
      return names.length >= 2
        ? `${names[0][0]}${names[1][0]}`.toUpperCase()
        : names[0][0].toUpperCase();
    }
    return "U"; // Default initial for user
  };

  return role === "model" ? (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        p: 2,
        bgcolor: "#004d5612",
        my: 2,
        gap: 2,
        borderRadius: 3,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        maxWidth: "75%",
      }}>
      <Avatar sx={{ bgcolor: "#004d56" }}>
        <img src="logo.jpeg" alt="avatar" width="30px" />
      </Avatar>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "white",
            lineHeight: 1.5,
            wordBreak: "break-word",
          }}>
          {content}
        </Typography>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        p: 2,
        bgcolor: "#004d56",
        my: 2,
        gap: 2,
        borderRadius: 3,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        maxWidth: "75%",
        ml: "auto",
      }}>
      <Avatar sx={{ bgcolor: "#004d56", color: "white", fontWeight: "bold" }}>
        {getInitials()}
      </Avatar>
      <Typography
        sx={{
          fontSize: "16px",
          color: "white",
          lineHeight: 1.5,
          wordBreak: "break-word",
        }}>
        {content}
      </Typography>
    </Box>
  );
};

export default ChatItem;
