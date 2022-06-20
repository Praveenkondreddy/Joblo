import React, { useState,useEffect } from 'react'
import './home.css'
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from '../Header/header.js'
const apiUrl = "http://localhost:8080/"


function Home() {
     
  const [user,setUser]=useState([])
  
  const apply= i => async () =>{
    toast.success(`Application for ${i.companyName} posted successfully `,{position:toast.POSITION.BOTTOM_RIGHT})
    const res = await axios.get(apiUrl + "profile");
    const profile=res.data[0]
    const {name,email,phoneno}=profile
    const {Id,companyName,jobPosition}= i
    const details={name,email,phoneno,jobId:Id,companyName,jobPosition}

    const app=await axios.post(apiUrl+"applicants",details)
    console.log(app)    
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
        <button class="apply" onClick={apply(i)}>Apply</button>
        <ToastContainer />
        </div>
      
        </div>
      ))}
    
    </div>
    </>
    )
}

export default Home