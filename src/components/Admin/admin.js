import React, {useState} from 'react'
import './admin.css'
import axios from "axios";
import Navbar from '../Navbar/navbar';

const apiUrl = "http://localhost:8080/"

function Admin() {

    const [details,setDetails]=useState({name:"",email:""})
    const submitHandler= async (e) => {
      e.preventDefault()
      
      const {data}= await axios.post(apiUrl + "posts",details);
      console.log(data)
      
} 

  return (
      <>
      <Navbar />
    <div class="container">
     
    <div class="form-class">
    <form onSubmit={submitHandler}>
     <div class="admin-inner">
      <h4>Job Posting :</h4>
      
      <div class="form-group">
      <label htmlFor='name'>Company Name : </label>
      <input type="text" class="input" name="name" onChange={e =>setDetails({...details, companyName:e.target.value})} value={details.companyName}/>  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='jobPosition'>Job Position : </label>
      <input type="text" class="input" name="jobPositiom" onChange={e =>setDetails({...details, jobPosition:e.target.value})} value={details.jobPosition}/>  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='companyPlace'>Company Place : </label>
      <input type="text" class="input" name="companyPlace" onChange={e =>setDetails({...details, companyPlace:e.target.value})} value={details.companyPlace} />  
      </div>
      <hr />
      <div class="form-group">
      <label htmlFor='description'>Description : </label>
      <input type="text" class="input" name="description" onChange={e =>setDetails({...details, description:e.target.value})} value={details.description} />  
      </div>
      <hr />
      <div class="form-group">
      <input type="submit" class="login-input" value="Upload Post" />  
      </div><br />
     
  
     </div>
    </form>
    
    </div>
    
    </div></>
  )
}

export default Admin