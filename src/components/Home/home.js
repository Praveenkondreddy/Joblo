import React, { useState,useEffect } from 'react'
import './home.css'
import axios from "axios";
import Header from '../Header/header.js'
const apiUrl = "http://localhost:8080/"

function Home() {
     
  const [user,setUser]=useState([])
 
 
 // const  a=Object.values(user[0])
 
  
 const apply=() =>{
  
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
         <div class="home-post"> 
        <div key={i.Id}>
        <h3>{i.companyName}</h3>
        <p>{i.jobPosition}</p>

        <p>{i.companyPlace}</p>
        <button onClick={apply()} class="btn">Apply</button>
        </div>
      
        </div>
      ))}
    
    </div>
    </>
    )
}

export default Home