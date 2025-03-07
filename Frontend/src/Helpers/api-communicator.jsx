import axios from "axios";

export const loginUser = async (email, password) => {
  const res = await axios.post("/users/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  return res.data;
};

export const signupUser = async (name, email, password) => {
  const res = await axios.post("/users/signup", { name, email, password });
  if (res.status !== 200) {
    throw new Error("Unable to sign up");
  }
  return res.data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/users/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  return res.data;
};

export const sendChatRequest = async (message) => {
  const res = await axios.post("/chat/new", { message });

  if (res.status !== 200) {
    throw new Error("Unable to send chat request");
  }

  return {
    chats: res.data.chats.map((chat) => ({
      role: chat.role,
      content: chat.content,
      createdAt: chat.createdAt,
    })),
  };
};

export const getUserChats = async () => {
  const res = await axios.get("/chat/all-chats");
  if (res.status !== 200) {
    throw new Error("Unable to fetch chats");
  }

  return {
    chats: res.data.chats.map((chat) => ({
      role: chat.role,
      content: chat.content,
      createdAt: chat.createdAt,
    })),
  };
};

export const deleteChats = async () => {
  const res = await axios.delete("/chat/delete");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  return res.data;
};

export const userLogout = async () => {
  const res = await axios.get("/users/logout");
  if (res.status !== 200) {
    throw new Error("Unable to logout");
  }
  return res.data;
};
