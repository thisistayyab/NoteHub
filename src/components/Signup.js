import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setcredentials] = useState({name:"", email:"", password:"", cpassword:""})
    let navigate = useNavigate()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const {name, email, password} = credentials
        const response = await fetch("https://notehub-tau.vercel.app/api/auth/createuser",{
            method : "POST",
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify({name, email, password})
          });
          const json = await response.json();
          console.log(json)
          if(json.success){
            localStorage.setItem('token', json.authtoken);
            navigate('/')
          }
          else{
            props.showAlert("Check Your email and password", "Error")
          }
    }

    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };
  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div className="form-row my-3">
    <div className="form-group col-md-6 my-3">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" id="name" name='name' placeholder="Name" onChange={onchange}/>
    </div>
    <div className="form-group col-md-6 my-3">
      <label htmlFor="email">Email</label>
      <input type="email" className="form-control" id="email" name='email' placeholder="Email" onChange={onchange}/>
    </div>
    <div className="form-group col-md-6 my-3">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onchange} required minLength={5}/>
    </div>
    <div className="form-group col-md-6 my-3">
      <input type="password" className="form-control" id="cpassword" name='cpassword' placeholder="Confirm Password" onChange={onchange} required minLength={5}/>
    </div>
  </div>
  <button type="submit" className="btn btn-primary my-3">Sign up</button>
</form>
    </div>
  )
}

export default Signup