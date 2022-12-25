/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './App.css';
import Planner from './components/Planner';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Notes from './components/Notes';
import { Container, Row, Col } from "react-bootstrap";
import MainPage from './components/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

function App() {
  return (
    <>
   
       
          <UserAuthContextProvider>
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<ProtectedRoute><Login /></ProtectedRoute>} />
              <Route path="/signup" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
              <Route exact path="/mainPage" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
              <Route path="/planner" element={<ProtectedRoute><Planner /></ProtectedRoute>} />
              <Route exact path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
            </Routes>
            </BrowserRouter>
          </UserAuthContextProvider>
         
     </>
  );
}

export default App;


