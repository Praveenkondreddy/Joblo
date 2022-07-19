import React, {useState} from 'react'
import './profile.css'
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from '../Header/header';

const apiUrl = "http://localhost:3000/"

function Profile() {

    const [details,setDetails]=useState({name:"",email:"",phoneno:"",interMarks:"",degreePercentage:"",currentOrganisation:"",experience:""})
    const submitHandler= async (e) => {
      e.preventDefault()
      const email=details.email
      const user= await axios.get(apiUrl + `users/email/${email}`);
      console.log(user)
      const {data}= await axios.post(apiUrl + "profile",{...details,userId:user.data.id});
      console.log(data)
      toast.info("Profile edited successfully",{position:toast.POSITION.BOTTOM_RIGHT})

} 

  return (
    <>
    <Header />
    <div class="profile-container">
     
    <div class="form-class">
    <div class="profile-inner">
    <form onSubmit={submitHandler}>
     
      <h4>Please edit your details</h4>
      
      <div class="form-group">
      <label htmlFor='name'>Name : </label>
      <input type="text" class="input" name="name" onChange={e =>setDetails({...details, name:e.target.value})} value={details.name}/>  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='email'>Email  Id : </label>
      <input type="text" class="input" name="email" onChange={e =>setDetails({...details, email:e.target.value})} value={details.email}/>  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='phone'>Phone No : </label>
      <input type="text" class="input" name="phoneno" onChange={e =>setDetails({...details, phoneno:e.target.value})} value={details.phoneno} />  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='interMarks'>Inter Marks : </label>
      <input type="text" class="input" name="interMarks" onChange={e =>setDetails({...details, interMarks:e.target.value})} value={details.interMarks} />  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='degreePercentage'>Degree Percentage : </label>
      <input type="text" class="input" name="degreePercentage" onChange={e =>setDetails({...details, degreePercentage:e.target.value})} value={details.degreePercentage} />  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='currentOrganisation'>Current Organisation: </label>
      <input type="text" class="input" name="currentOrganisation" onChange={e =>setDetails({...details, currentOrganisation:e.target.value})} value={details.currentOrganisation} />  
      </div>
      <br></br>
      <div class="form-group">
      <label htmlFor='experience'>Experience : </label>
      <input type="text" class="input" name="experience" onChange={e =>setDetails({...details, experience:e.target.value})} value={details.experience} />  
      </div>
      <br></br>
      <div class="form-group">
      <input type="submit" class="login-input" value="Edit profile" />  
      <ToastContainer />
      </div> <br></br>
     
  
     
    </form>
    </div>
    </div>
    
    </div>
    </>
  )
}

export default Profile