import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav me-auto">
        <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
      </div>
      <div className='d-flex'>
      <Link className="btn bg-white text-success" style={{ marginRight: "5px",
      marginBottom: "5px !important" }} to="/login">Login</Link>
      <Link className="btn bg-white text-success" to="/createuser">Signup</Link>
      </div>
    </div>
  </div>
</nav>
  </div>
  )
}

