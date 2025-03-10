import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

export default function Login() {
  const [credentials,setcredentials] = useState({email:"",password:""})
  let navigate = useNavigate();
  const handleSubmit=async(e)=> {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/loginuser",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
       });
      const json = await response.json()
      console.log(json);
      if(json.status === "success"){
        alert("Credentials are validated");
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }else{
        alert("Please provide the valid Credentials")
      }
  }
  const valChange = (event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <div>
      <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp" name='email' value={credentials.email} onChange={valChange}/>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1" name='password' value={credentials.password} onChange={valChange}
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to="/createuser" className="m-3 btn btn-danger">I'm a new user</Link>
      </form>
      </div>
    </div>
  )
}
