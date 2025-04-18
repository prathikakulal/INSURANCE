

// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [activeTab, setActiveTab] = useState('login');
//   const [rememberMe, setRememberMe] = useState(false);

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         {/* Logo */}
//         <div className="logo-container">
//           <div className="logo-circle">B</div>
//           <div className="logo-text">Bookd</div>
//         </div>

//         {/* Welcome Text */}
//         <div className="welcome-text">
//           <h2>Welcome to Bookd</h2>
//           <p>Please login to continue</p>
//         </div>

//         {/* Tabs */}
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

//         {/* Form */}
//         {activeTab === 'login' ? (
//           <div className="login-form">
//             <div className="input-group">
//               <span className="input-icon">✉️</span>
//               <input type="email" placeholder="Email" />
//             </div>
//             <div className="input-group">
//               <span className="input-icon">🔒</span>
//               <input type="password" placeholder="Password" />
//             </div>

//             <div className="form-options">
//               <label className="remember-me">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={() => setRememberMe(!rememberMe)}
//                 />
//                 Remember me
//               </label>
//               <a href="#" className="forgot-password">
//                 Forgot password?
//               </a>
//             </div>

//             <button className="login-button">
//               <span className="button-icon">→</span> Login
//             </button>
//           </div>
//         ) : (
//           <div className="register-form">
//             {/* Register form would go here */}
//             <p>Register form content</p>
//           </div>
//         )}

//         {/* Footer */}
//         <div className="footer">
//           <a href="#">Terms of Service</a>
//           <span>•</span>
//           <a href="#">Privacy Policy</a>
//         </div>

//         {/* Tags */}
//         <div className="tags">
//           <span className="tag">Books</span>
//           <span className="tag">Reading</span>
//           <span className="tag">Community</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// // import React, { useState } from 'react';
// // import './Login.css';

// // const Login = () => {
// //   const [activeTab, setActiveTab] = useState('login');
// //   const [rememberMe, setRememberMe] = useState(false);
// //   const [agreeTerms, setAgreeTerms] = useState(false);

// //   return (
// //     <div className="login-page">
// //       <div className="login-container">
// //         <div className="login-card">
// //           {/* Logo */}
// //           <div className="logo-container">
// //             <div className="logo-circle">B</div>
// //             <div className="logo-text">Bookd</div>
// //           </div>

// //           {/* Welcome Text */}
// //           <div className="welcome-text">
// //             <h2>Welcome to Bookd</h2>
// //             <p>Login or create an account to manage your scheduling journey</p>
// //           </div>

// //           {/* Tabs */}
// //           <div className="tabs">
// //             <button
// //               className={`tab ${activeTab === 'login' ? 'active' : ''}`}
// //               onClick={() => setActiveTab('login')}
// //             >
// //               Login
// //             </button>
// //             <button
// //               className={`tab ${activeTab === 'register' ? 'active' : ''}`}
// //               onClick={() => setActiveTab('register')}
// //             >
// //               Register
// //             </button>
// //           </div>

// //           {/* Form */}
// //           {activeTab === 'login' ? (
// //             <div className="login-form">
// //               <div className="input-group">
// //                 <span className="input-icon">✉️</span>
// //                 <input type="email" placeholder="Email" />
// //               </div>
// //               <div className="input-group">
// //                 <span className="input-icon">🔒</span>
// //                 <input type="password" placeholder="Password" />
// //               </div>

// //               <div className="form-options">
// //                 <label className="remember-me">
// //                   <input
// //                     type="checkbox"
// //                     checked={rememberMe}
// //                     onChange={() => setRememberMe(!rememberMe)}
// //                   />
// //                   Remember me
// //                 </label>
// //                 <a href="#" className="forgot-password">
// //                   Forgot password?
// //                 </a>
// //               </div>

// //               <button className="login-button">
// //                 <span className="button-icon">→</span> Login
// //               </button>
// //             </div>
// //           ) : (
// //             <div className="register-form">
// //               <div className="input-group">
// //                 <span className="input-icon">👤</span>
// //                 <input type="text" placeholder="Full Name" />
// //               </div>
// //               <div className="input-group">
// //                 <span className="input-icon">✉️</span>
// //                 <input type="email" placeholder="Email" />
// //               </div>
// //               <div className="input-group">
// //                 <span className="input-icon">🔒</span>
// //                 <input type="password" placeholder="Password" />
// //               </div>

// //               <label className="terms-checkbox">
// //                 <input
// //                   type="checkbox"
// //                   checked={agreeTerms}
// //                   onChange={() => setAgreeTerms(!agreeTerms)}
// //                 />
// //                 I agree to the terms and conditions
// //               </label>

// //               <button className="login-button">
// //                 <span className="button-icon">→</span> Create account
// //               </button>
// //             </div>
// //           )}

// //           {/* Footer */}
// //           <div className="footer">
// //             By using Bookd, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
// //           </div>

// //           {/* Tags */}
// //           <div className="tags">
// //             <span className="tag">Secure login</span>
// //             <span className="tag">Data privacy</span>
// //             <span className="tag">Personalized scheduling</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [activeTab, setActiveTab] = useState('login');

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

        <div className="form">
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Password" />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> I agree to the terms and conditions
            </label>
          </div>

          <button className="login-button">
            <span className="button-icon">🔓</span>
            {activeTab === 'login' ? 'Login' : 'Create account'}
          </button>
        </div>

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
