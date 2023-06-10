import React, { useEffect, useState } from 'react';

const ShowNotes = () => {
  const [email, setEmail] = useState('');
  const [userNotes, setUserNotes] = useState([]);

  const handleInputs = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    }
  };

  const pullTheData = async (e) => {
    // e.preventDefault();
    const res = await fetch('https://addnotes-znzq.onrender.com/pullthedata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();
    // console.log(data);
    setUserNotes(data);
    if (res.status === 401 || data.length === 0 || !data) {
      window.alert('Note not Found, check your Email properly');
    } else {
      window.alert('Notes Found');
      console.log('Notes Found');
    }
  };

  // useEffect(() => {
  //   pullTheData();
  //   console.log(userNotes);
  // }, []);

  return (
    <>
      <div className="emailfield">
        <input type="email" name="email" placeholder="Enter the email" onChange={handleInputs} value={email} />
        <br />
        <button onClick={pullTheData} className='showbtn'>Show</button>
      </div>
        {userNotes.map((data, index) => (
          <div key={index}>
            {/* <h3>Email: {data.email}</h3> */}
            <div className='userM'>
            {data.messages.map((mess, messageIndex) => (
              <div key={messageIndex} className='usermessage'>
                <h4><span className='title'> Title</span>: {mess.title}</h4>
                <p><span className='title'> Message</span>: {mess.message}</p>
              </div>
            ))}
            </div>
            </div>
        ))}
   
    </>
  );
};

export default ShowNotes;