import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credentials, setcredentials] = useState({email:"", password:""})
    let navigate = useNavigate()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch("https://notehub-tau.vercel.app/api/auth/login",{
            method : "POST",
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email: credentials.email, password: credentials.password})
          });
          const json = await response.json();
          console.log(json)
          if(json.success){
            localStorage.setItem('token', json.authtoken);
            navigate('/')
          }
          else{
            props.showAlert("Wrong Details", "Error")
          }
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            placeholder="Enter email"
            value={credentials.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            name='password'
            placeholder="Password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
