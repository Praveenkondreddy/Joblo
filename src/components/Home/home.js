import React, { useState,useEffect } from 'react'
import './home.css'
import axios from "axios";
import Header from '../Header/header.js'
const apiUrl = "http://localhost:8080/"

function Home() {
     
  const [user,setUser]=useState([])
  
  const apply= async () =>{
    const res = await axios.get(apiUrl + "posts");
    console.log(res.data)
    
  }
 
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
         <div class="home-post"> 
        
        <h3 class="companyName">{i.companyName}</h3>
        <p>{i.jobPosition}</p>
        <p>{i.description}</p>
        <p>{i.companyPlace}</p>
        <button class="apply" onClick={apply}>Apply</button>
        </div>
      
        </div>
      ))}
    
    </div>
    </>
    )
}

export default Home