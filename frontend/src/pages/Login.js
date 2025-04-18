
// // import React, { useState } from 'react';
// // import './Login.css';

// // function Login() {
// //   const [activeTab, setActiveTab] = useState('login');

// //   return (
// //     <div className="login-wrapper">
// //       <div className="login-container">
// //         <div className="logo-circle">PB</div>
// //         <h1 className="brand-name">policybazaar</h1>

// //         <div className="welcome-text">
// //           <h2>Welcome to policybazaar</h2>
// //           <p>Login or create an account to manage your scheduling journey</p>
// //         </div>

// //         <div className="tabs">
// //           <button
// //             className={`tab ${activeTab === 'login' ? 'active' : ''}`}
// //             onClick={() => setActiveTab('login')}
// //           >
// //             Login
// //           </button>
// //           <button
// //             className={`tab ${activeTab === 'register' ? 'active' : ''}`}
// //             onClick={() => setActiveTab('register')}
// //           >
// //             Register
// //           </button>
// //         </div>

// //         <div className="form">
// //           <div className="input-group">
// //             <span className="input-icon">👤</span>
// //             <input type="text" placeholder="Username" />
// //           </div>
// //           <div className="input-group">
// //             <span className="input-icon">📧</span>
// //             <input type="email" placeholder="Email" />
// //           </div>
// //           <div className="input-group">
// //             <span className="input-icon">🔒</span>
// //             <input type="password" placeholder="Password" />
// //           </div>

// //           <div className="form-options">
// //             <label className="remember-me">
// //               <input type="checkbox" /> I agree to the terms and conditions
// //             </label>
// //           </div>

// //           <button className="login-button">
// //             <span className="button-icon">🔓</span>
// //             {activeTab === 'login' ? 'Login' : 'Create account'}
// //           </button>
// //         </div>

// //         <div className="footer">
// //           <p>
// //             By using policybazaar, you agree to our{' '}
// //             <a href="#terms">Terms of Service</a> and{' '}
// //             <a href="#privacy">Privacy Policy</a>.
// //           </p>
// //         </div>

// //         <div className="tags">
// //           <span className="tag">Secure login</span>
// //           <span className="tag">Data privacy</span>
// //           <span className="tag">Personalized scheduling</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;




// import React, { useState } from 'react';
// import './Login.css';
// import { generateHash } from '../utils/hash';

// function Login() {
//   const [activeTab, setActiveTab] = useState('login');
//   const [formData, setFormData] = useState({ username: '', email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = formData;
//     const hash = await generateHash(email, password);

//     const endpoint = activeTab === 'login' ? '/api/login' : '/api/register';

//     const res = await fetch(`http://localhost:5000${endpoint}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, hash }),
//     });

//     const data = await res.json();
//     setMessage(data.message);
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-container">
//         <div className="logo-circle">PB</div>
//         <h1 className="brand-name">policybazaar</h1>

//         <div className="welcome-text">
//           <h2>Welcome to policybazaar</h2>
//           <p>Login or create an account to manage your scheduling journey</p>
//         </div>

//         <div className="tabs">
//           <button
//             className={`tab ${activeTab === 'login' ? 'active' : ''}`}
//             onClick={() => setActiveTab('login')}
//           >
//             Login
//           </button>
//           <button
//             className={`tab ${activeTab === 'register' ? 'active' : ''}`}
//             onClick={() => setActiveTab('register')}
//           >
//             Register
//           </button>
//         </div>

//         <form className="form" onSubmit={handleSubmit}>
//           <div className="input-group">
//             <span className="input-icon">👤</span>
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <span className="input-icon">📧</span>
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="input-group">
//             <span className="input-icon">🔒</span>
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-options">
//             <label className="remember-me">
//               <input type="checkbox" required /> I agree to the terms and conditions
//             </label>
//           </div>

//           <button className="login-button" type="submit">
//             <span className="button-icon">🔓</span>
//             {activeTab === 'login' ? 'Login' : 'Create account'}
//           </button>

//           <p className="response-message">{message}</p>
//         </form>

//         <div className="footer">
//           <p>
//             By using policybazaar, you agree to our{' '}
//             <a href="#terms">Terms of Service</a> and{' '}
//             <a href="#privacy">Privacy Policy</a>.
//           </p>
//         </div>

//         <div className="tags">
//           <span className="tag">Secure login</span>
//           <span className="tag">Data privacy</span>
//           <span className="tag">Personalized scheduling</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import './Login.css';
import { generateHash } from '../utils/hash'; // ✅ Your hash function

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hash = await generateHash(email, password);

    try {
      const response = await fetch(
        `http://localhost:5000/api/${activeTab}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, hash }),
        }
      );

      const data = await response.json();
      setMessage(data.message || 'Success');
    } catch (error) {
      console.error('Failed to fetch:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="logo-circle">PB</div>
        <h1 className="brand-name">policybazaar</h1>

        <div className="welcome-text">
          <h2>Welcome to policybazaar</h2>
          <p>Login or create an account to manage your scheduling journey</p>
        </div>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="login-button">
            <span className="button-icon">🔓</span>
            {activeTab === 'login' ? 'Login' : 'Create account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: 'green', marginTop: '10px' }}>
          {message}
        </p>

        <div className="footer">
          <p>
            By using policybazaar, you agree to our{' '}
            <a href="#terms">Terms of Service</a> and{' '}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>

        <div className="tags">
          <span className="tag">Secure login</span>
          <span className="tag">Data privacy</span>
          <span className="tag">Personalized scheduling</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
