import React, {useState} from 'react'
import './admin.css'
import axios from "axios";
import Navbar from '../Navbar/navbar';
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const apiUrl = "http://localhost:3000/"

function Admin() {

    const [details,setDetails]=useState({companyName:"",jobPosition:"",companyPlace:"",description:""})
    const submitHandler= async (e) => {
      e.preventDefault()
      
      const {data}= await axios.post(apiUrl + "posts",details);
      console.log(data)
      toast.info("Job Posted Successfully",{position:toast.POSITION.BOTTOM_RIGHT})
} 

  return (
      <>
      <Navbar />
    <div class="admin-container">
     
    <div class="form-container">
    <form onSubmit={submitHandler}>
     
      <h4>Job Posting :</h4>
      
      <div class="form-group">
      <label htmlFor='companyName'>Company Name : </label>
      <input type="text" class="input" name="companyName" onChange={e =>setDetails({...details, companyName:e.target.value})} value={details.companyName}/>  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='jobPosition'>Job Position : </label>
      <input type="text" class="input" name="jobPositiom" onChange={e =>setDetails({...details, jobPosition:e.target.value})} value={details.jobPosition}/>  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='companyPlace'>Company Place : </label>
      <input type="text" class="input" name="companyPlace" onChange={e =>setDetails({...details, companyPlace:e.target.value})} value={details.companyPlace} />  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='description'>Description : </label>
      <textarea rows={2}  type="text" class="input" name="description" onChange={e =>setDetails({...details, description:e.target.value})} value={details.description} />  
      </div>
      <br></br>
      
      <div class="form-group">
      <input type="submit" class="upload-input" value="Upload Post" />  
      <ToastContainer />
    
     
  
     </div>
    </form>
    </div>
    
    
    
    </div></>
  )
}

export default Admin