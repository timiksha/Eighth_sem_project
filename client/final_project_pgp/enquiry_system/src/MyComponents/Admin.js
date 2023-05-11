import React, { useState,useEffect } from 'react';

function Admin({setAdminLoggedIn}) {
    useEffect(()=>{
        document.title="Admin ";
    },[]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 
  const handleLogin = (e) => {
    console.log(`Logging in with username: ${username} and password: ${password}`);
    // LoginFromServer(username, password);
    e.preventDefault();
    // TODO: Implement actual login functionality
   if(username==='timiksha' && password==='timi'){
      localStorage.setItem('adminLoggedIn','true');
      setAdminLoggedIn('true') ;
      setLoggedIn(true); 
    }
  };
            
  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} style={{ width: '100%' }} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} style={{ width: '100%' }}/>
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
      {loggedIn && <p>Logged In successfully</p>} {/* Display "Logged In successfully" when login is successful */}
    </div>
  );
}

export default Admin;
