import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Styling/Signup.css";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (email === '' || password === '') {
         setError('Please enter your email and password.');
      } else {
         try {
            const response = await axios.post('http://localhost:5000/app', { email, password });
            // If signup is successful, redirect to home page
            console.log(response.data);
            navigate('/'); // Update with your home page route
         } catch (error) {
            setError('Failed to signup. Please try again.');
         }
      }
   };


  // Redirect to home page if user is already logged in
  const redirectToHome = () => {
    navigate('/'); // Update with your home page route
  };

  return (
    <div className="main-div">
      <div className='login-page'>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={redirectToHome}>Already logged in? Go to Home</button>
      </div>
    </div>
  );
};

export default LoginPage;





























// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../Styling/Signup.css";

// const LoginPage = () => {
//    const [email, setEmail] = useState('');
//    const [password, setPassword] = useState('');
//    const [error, setError] = useState('');
//    const navigate = useNavigate();

//    const handleEmailChange = (e) => {
//       setEmail(e.target.value);
//    };

//    const handlePasswordChange = (e) => {
//       setPassword(e.target.value);
//    };

//    const handleSubmit = (e) => {
//       e.preventDefault();
//       if (email === '' || password === '') {
//          setError('Please enter your email and password.');
//       } else {
//          // Perform login logic here, e.g., API call
//          // If successful, navigate to home page
//          // If unsuccessful, display error message
//          if (email && password) {
//             // Replace the above condition with your actual login logic
//             navigate('/'); // Update with your home page route
//          } else {
//             setError('Invalid email or password. Please try again.');
//          }
//       }
//    };

//    // Redirect to home page if user is already logged in
//    const redirectToHome = () => {
//       navigate('/'); // Update with your home page route
//    };

//    return (
      
//       <div className="main-div">
//       <div className='login-page'>
//          <h1>Signup Page</h1>
//          <form onSubmit={handleSubmit}>
//             <label>Email:</label>
//             <input type="email" value={email} onChange={handleEmailChange} />
//             <br />
//             <label>Password:</label>
//             <input
//                type="password"
//                value={password}
//                onChange={handlePasswordChange}
//             />
//             <br />
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <button type="submit">Sign Up</button>
//          </form>
//          <button onClick={redirectToHome}>Already logged in? Go to Home</button>
//       </div>
//       </div>
      
//    );
// };

// export default LoginPage;
