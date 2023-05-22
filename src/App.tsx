// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginScreen from "./pages/auth/login";
import RegisterScreen from "./pages/auth/register";
import DashboardScreen from "./pages/dashboard/dashboard";
import Home from "./pages/home/home";
import React from "react";

import { createContext } from "react";

interface Profile {
  name: string,
  email: string
}

const defaultProfile : Profile = {
  email:"sample@mail.com",
  name:"kenn"
}

export const ThemeContext = React.createContext<Profile>({} as Profile);
  
function App() {
 

  return (
    <ThemeContext.Provider value={defaultProfile}>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />

        <Route path="/dashboard" element={<DashboardScreen />} />


        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeContext.Provider>
  )
}

export default App
