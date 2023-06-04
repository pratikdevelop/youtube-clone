import "./App.css";
import Signup from "./component/Signup";
import Home from "./component/Home";
import Login from "./component/Login";
import { Route ,BrowserRouter as Router, Navigate, Routes } from "react-router-dom";
import ResetPassword from "./component/ResetPassword";
import {UserProvider} from './consumer/usercontext'
import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";
const App = () => {
  const signout = () => {};
  const token = localStorage.getItem('token')
  return (
    <div className="relative flex flex-col">
      <NavBar></NavBar>
      <div className="flex flex-auto">
      <SideBar/>
      <Routes>
        <Route
          path="/signup"
          element={!token ? <Signup /> : <Navigate to="/"> </Navigate>}
        ></Route>
        <Route
          path="/signin"
          element={!token ? <Login /> : <Navigate to="/"> </Navigate>}
        ></Route>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/reset-password"
          element={token ? <Navigate to="/" /> : <ResetPassword />}
        ></Route>
      </Routes>
        
      </div>
    </div>
  );
};

export default App;
