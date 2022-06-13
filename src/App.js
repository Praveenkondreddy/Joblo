import React from 'react';
import Login from './components/Login/index.js'
import Register from './components/Register/register.js'
import Home from './components/Home/home.js'
import Admin from './components/Admin/admin.js'
import Profile from './components/Profile/profile.js'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {


  return (
    <Router>
      <div class="app-container">

       <Routes>
       <Route path='/' element={<Login />} />
       <Route path='/register' element={<Register />} />
       <Route path='/home' element={<Home />} />
       <Route path='/profile' element={<Profile />} />
       <Route path='/admin' element={<Admin />} />
      </Routes>
     
    </div>
    </Router>
    
  );
}

export default App;
