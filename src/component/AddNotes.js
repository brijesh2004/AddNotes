import React, { useState } from 'react';

const AddNotes = () => {

  // create the State 
  const [email , setEmail]=useState('');
  const [title , setTitle] = useState('');
  const [message , setMessage]= useState('');

  // to handle the input field
  const HandleInputs = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
    else if( name === 'title'){
      setTitle(value);
    }
  }
 
  // function for send the data to the backend 
  const AddTheMessage = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/addNote',{
      method:'POST',
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        email ,title, message 
      })
    })
    const data = await res.json();
    console.log(data);
    if(res.status===401 || !data || res.status===500){
      window.alert("Notes Not Added");
     }
     else{
      window.alert(" Notes Added Successfully");
      console.log("Notes Added Successfully");
     }
  }
  
  return (
    <>
      <div className='container page_start'>
        <form className='add_notes' action='POST'>
        <h1>Add Notes</h1>
          <input type="email" placeholder='enter Your email' name='email' value={email} onChange={HandleInputs}/> <br />
          <input type="text" placeholder='enter The Title' name='title' value={title} onChange={HandleInputs}/> <br />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Add Notes' value={message} onChange={HandleInputs}></textarea>
          <br />
          <button className='loginbtn' onClick={AddTheMessage} >Add</button>
        </form>
      </div>
    </>
  )
}

export default AddNotes;
