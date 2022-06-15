import React from 'react';
import Login from './components/Login/index.js'
import Register from './components/Register/register.js'
import Home from './components/Home/home.js'
import Admin from './components/Admin/admin.js'
import Profile from './components/Profile/profile.js'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Applicants from './components/Applicants/applicants.js';


function App() {


  return (
    <Router>
      

       <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/register' element={<Register />} />
       <Route path='/home' element={<Home />} />
       <Route path='/profile' element={<Profile />} />
       <Route path='/admin' element={<Admin />} />
       <Route path='/applicant' element={<Applicants/>} />
      </Routes>
     
  
    </Router>
    
  );
}

export default App;
