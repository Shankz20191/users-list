import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import { useState } from "react";
import Error from "./components/Error";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
  };
  return (
    <Router>
      <Navbar isLogin={isLogin} logout={logout} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={!isLogin && <Home login={login} />} />
        <Route path="/users" element={isLogin ? <Users /> : <Error />} />
        <Route path="*" element={<h1>ERROR!!!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
