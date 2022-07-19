import React, { useState,useEffect } from 'react'
import './applicants.css'
import axios from "axios";
import Navbar from '../Navbar/navbar';
const apiUrl = "http://localhost:3000/"

function Applicants() {
     
  const [user,setUser]=useState([])
  

 
  useEffect(() => {
    
    const fetch = async () => {
       const res = await axios.get(apiUrl + "applicants");              
       setUser(res.data);              
    };

    fetch();
  }, []);


  return (
    <>
    <Navbar />
    <div class="app-container">
    <div class="applicant-container">
      
      {user.map(i =>(
        <div key={i.Id}>
         <div class="applicant-post"> 
        
        <h3 class="companyName">{i.name}</h3>
        <p>{i.email}</p>
        <p>{i.phoneno}</p>
        <p>{i.companyName}</p>
        <p>{i.jobPosition}</p>
        </div> 
      
        </div>
      ))}
    </div>
    </div>
    </>
    )
}

export default Applicants