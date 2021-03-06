import React, {useState} from 'react'
import './register.css'
//import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const apiUrl = "http://localhost:3000/users/"

function Register() {
//  const history = useNavigate();
    const [details,setDetails] = useState({username:"",password:"",email:""})
    const submitHandler= async (e) => {
      e.preventDefault()
      
      const {data}= await axios.post(apiUrl + "register",details);
      console.log(data)
      toast.info("Profile registered successfully",{position:toast.POSITION.BOTTOM_RIGHT})
      
      
      
} 


  return (
    <div class="register-container">
     
    <div class="form-class">
    <form onSubmit={submitHandler}>
     <div class="register-inner">
      <h4>Please register your details</h4>
      
      <div class="form-group">
      <label htmlFor='username'>Username : </label>
      <input type="text" class="input" name="username" onChange={e =>setDetails({...details, username:e.target.value})} value={details.username}/>  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='email id'>Email Id : </label>
      <input type="text" class="input" name="email id" onChange={e =>setDetails({...details, email:e.target.value})} value={details.email}/>  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='password'>Password : </label>
      <input type="password" class="input" name="password" onChange={e =>setDetails({...details, password:e.target.value})} value={details.password} />  
      </div>
      <hr />
      <div class="form-group">
        
      <input type="submit" class="login input" value="Register" />  
      <ToastContainer />
      </div><br />
     
  
     </div>
    </form>
    
    </div>
    
    </div>
  )
}

export default Register