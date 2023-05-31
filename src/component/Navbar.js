import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    {/* <Link className="navbar-brand text-white" to="/">Logo</Link> */}
    <button className="text-white navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="text-white navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
      <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/addnotes">Add Notes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/shownotes">Show Notes</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
