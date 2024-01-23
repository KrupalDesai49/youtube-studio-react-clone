import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./components/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <div className=" flex min-h-screen flex-col bg-black">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
