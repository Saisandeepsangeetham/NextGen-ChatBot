import Header from './Components/Header';
import { Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Chat from "./Pages/Chat.jsx";
import Notfound from './Pages/Notfound.jsx';
import { useAuth } from './Context/AuthContext.jsx';

function App() {
  const auth = useAuth();
  return <main>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup/>}/>
      { auth.user && (<Route path='/chat' element={<Chat/>}/>)}
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  </main>
}

export default App
