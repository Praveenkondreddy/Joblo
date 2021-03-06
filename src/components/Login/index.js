import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './index.css'
import axios from "axios";
import Cookies from 'js-cookie'
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const apiUrl = "http://localhost:3000/users/"

function Login() {


    const [details,setDetails]=useState({username:"",password:""})
    const submitHandler= async (e) => {
      e.preventDefault()
      let jwtToken
      
      const {data}= await axios.post(apiUrl + "login",details);
      const jwt=data.jwt
      const status=data.user.status
      Cookies.set("userId",data.user.id)
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      console.log(jwt)
      log(jwt,status)
} 
const history = useNavigate();
const log= (jwt,status)=>{
  if (jwt !== undefined && status==='admin'){
    history('/admin')
    toast.success("Login Successfull",{position:toast.POSITION.BOTTOM_RIGHT})

  }else if(jwt !== undefined ){
    history('/home')

  } else{
    console.log("logged error")
  }
}

  return (
    <div class="logins-container">
     <div class="login-image">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
      </div> 
    <div class="login-class">
    <div class="login-inner">
    <form onSubmit={submitHandler}>
     
      <h2>Welcome back,</h2>
      <h4>Please enter your details</h4>
      
      <div class="form-group">
      <label htmlFor='username'>Username : </label>
      <input type="text" class="input" name="username" onChange={e =>setDetails({...details, username:e.target.value})} value={details.username}/>  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='password'>Password : </label>
      <input type="password" class="input" name="password" onChange={e =>setDetails({...details, password:e.target.value})} value={details.password} />  
      </div>
      <br></br>
      <div class="form-group">
      <input type="submit" class="login input" value="Login" />  
      </div><br />
      <div>
        <Link to="/register">
        <button class="register-btn">Register us!</button></Link>
        <ToastContainer />
      
        </div>
  
     
    </form>
    </div>
    
    </div>
    
    </div>
  )
}

export default Login