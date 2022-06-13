import React, { useState,useEffect } from 'react'
import './home.css'
import axios from "axios";
import Header from '../Header/header.js'
const apiUrl = "http://localhost:8080/"

function Home() {
     
  const [user,setUser]=useState([])
 
 
 // const  a=Object.values(user[0])
 
  
  useEffect(() => {
    const fetch = async () => {
       const res = await axios.get(apiUrl + "posts");              
       setUser(res.data);              
    };
    fetch();
  }, []);


  return (
    <>
<Header />
    <div class="home-container">
      
      {user.map(i =>(
        <div key={i.Id}>
        <h1 >{i.companyName}</h1>
        </div>
      ))}
    
    </div>
    </>
    
    )
    
  
}

export default Home