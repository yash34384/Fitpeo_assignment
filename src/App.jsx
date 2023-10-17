/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Dashboard from './Components/Dashboard.jsx';

function App() {
  return (
    <div style={{ backgroundColor: '#f5f6f8', width: '100%', height: '100vh' }}>
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
