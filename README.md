# *NextGen Chatbot*

A full-stack AI chatbot application built with *React (Vite) for the frontend* and *Node.js (Express) for the backend*. The chatbot enables users to communicate with an AI model for intelligent responses.

## *📂 Project Structure*
```
NextGen-Chatbot/
│── Backend/              # Backend folder (Node.js & Express)
│   ├── Config/           # Configuration files
│   ├── Controller/       # Business logic & API handlers
│   ├── Database/         # Database connection setup
│   ├── Models/           # Database models
│   ├── Routes/           # API routes
│   ├── Utils/            # Utility functions
│   ├── app.js            # Express app configuration
│   ├── index.js          # Backend entry point
│
│── Frontend/             # Frontend folder (React & Vite)
│   ├── src/              # Source folder
│   │   ├── Components/   # Reusable UI components
│   │   ├── Context/      # Context API for authentication
│   │   ├── Helpers/      # Helper functions & API handlers
│   │   ├── Pages/        # Application pages
│   │   ├── App.jsx       # Main application file
│   │   ├── main.jsx      # Entry point for React
│   ├── package.json      # Frontend dependencies
│   ├── vite.config.js    # Vite configuration
│
├── README.md             # Documentation file
```

---

## *🚀 Features*
- User authentication (Signup/Login)
- AI chatbot integration
- Secure API with JWT authentication
- Responsive UI with Material-UI
- Persistent chat history
- Clean and modular code structure

---

## *🛠️ Tech Stack*
### *Frontend:*
- React (Vite)
- Material-UI (MUI)
- React Router
- Axios for API requests
- React Hot Toast for notifications
- React Icons

### *Backend:*
- Node.js with Express.js
- MongoDB & Mongoose
- JWT authentication
- CORS for security

---

## *💻 Installation & Setup*
### *1️⃣ Clone the Repository*
```sh
git clone https://github.com/Saisandeepsangeetham/NextGen-ChatBot.git
cd NextGen-ChatBot
```

### *2️⃣ Backend Setup*
1. Navigate to the backend folder:
   ```sh
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a .env file and add:
   ````
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The backend will run on *http://localhost:5000* (default).

---

### *3️⃣ Frontend Setup*
1. Navigate to the frontend folder:
   ```sh
   cd ../Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```
   The frontend will run on *http://localhost:5173* (default).

---

## *🛠 API Routes*
### *Authentication*
- POST /users/signup → Create a new user
- POST /users/login → User login
- GET /users/auth-status → Check authentication status
- GET /users/logout → Logout user

### *Chat*
- POST /chat/new → Send a message to the chatbot
- GET /chat/all-chats → Fetch all user chats
- DELETE /chat/delete → Delete all user chats

---

## *📷 Screenshots*
### Home Page
> ![image-alt](https://github.com/Saisandeepsangeetham/NextGen-ChatBot/blob/main/Assets/Home%20Page.png?raw=true)
### Login Page
> ![image-alt](https://github.com/Saisandeepsangeetham/NextGen-ChatBot/blob/main/Assets/Login.png?raw=true)
### Signup Page
> ![image-alt](https://github.com/Saisandeepsangeetham/NextGen-ChatBot/blob/main/Assets/Sign%20Up.png?raw=true)
### Chat Page
> ![image-alt](https://github.com/Saisandeepsangeetham/NextGen-ChatBot/blob/main/Assets/Chat%20Page.png?raw=true)

---

## *🤝 Contributing*
1. Fork the project.
2. Create a new branch: git checkout -b feature-name
3. Make changes and commit: git commit -m "Added feature"
4. Push to the branch: git push origin feature-name
5. Submit a pull request!

---

## *📜 License*
This project is licensed under the *MIT License*.

---

## *📞 Contact*
For any queries, feel free to reach out:
- Email: sandeep.sangeetham@gmail.com
- GitHub: [Saisandeepsangeetham](https://github.com/Saisandeepsangeetham)
- LinkedIn: [Saisandeep Sangeetham](https://linkedin.com/in/saisandeep-sangeetham)

