import {
    createContext,
    useEffect,
    useState,
    useContext,
  } from "react";
  import {
    checkAuthStatus,
    loginUser,
    signupUser,
    userLogout,
  } from "../Helpers/api-communicator";
  
  const AuthContext = createContext(null);
  
  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      async function AuthStatus() {
        const data = await checkAuthStatus();
        if (data) {
          setUser({ email: data.email, name: data.name });
          setIsLoggedIn(true);
        }
      }
      AuthStatus();
    }, []);
  
    const login = async (email, password) => {
      const data = await loginUser(email, password);
      if (data) {
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
        console.log(data);
      }
    };
  
    const signup = async (name, email, password) => {
      const data = await signupUser(name, email, password);
      if (data) {
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
      }
    };
  
    const logout = async () => {
      await userLogout();
      setIsLoggedIn(false);
      setUser(null);
      window.location.reload();
    };
  
    return (
      <AuthContext.Provider value={{ user, isLoggedIn, login, logout, signup }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);
  