import React, { useState,useEffect } from 'react'
import './home.css'
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from '../Header/header.js'
import Cookies from 'js-cookie';
const apiUrl = "http://localhost:3000/"


function Home() {
     
  const [user,setUser]=useState([])
  
  const apply= i => async () =>{
    toast.success(`Application for ${i.companyName} posted successfully `,{theme:"light", position:toast.POSITION.BOTTOM_RIGHT})
    const userId=Cookies.get("userId")
    const res = await axios.get(apiUrl + `profile/${userId}`);
    console.log(res)
    const profile=res.data

    const {name,email,phoneno}=profile
    const {id,companyName,jobPosition}= i
    const details={name,email,phoneno,jobId:id,companyName,jobPosition}
    const app=await axios.post(apiUrl+"applicants",details)
    console.log(app)    
  }
 
  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position)=>{

      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      
    })
    
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