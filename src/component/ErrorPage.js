import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='text-center my-5'>
    <br /><br /><br /><br />
     <h1 > 404 oops page does not found </h1>
     <p className='emoji'>😪</p> 
     <NavLink to='/' className="fs-1 text-decoration-none text-white"><button className='gobackbtn'>Go Back ❌</button></NavLink>
    </div>
  )
}

export default ErrorPage
