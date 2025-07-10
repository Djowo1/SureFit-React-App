import React, { useState } from 'react';
import './AuPage.css';
import { useNavigate } from 'react-router-dom';

const AUPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [lpasswordVisible, setLPasswordVisible] = useState(false);
  const [spassword1Visible, setSPassword1Visible] = useState(false);
  const [spassword2Visible, setSPassword2Visible] = useState(false);

  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSignUp = () => {
    for (const [key, value] of Object.entries(signUpData)) {
      if (!value) {
        alert(`${key} is required!`);
        return;
      }
    }
    if (signUpData.password1 !== signUpData.password2) {
      alert('Passwords do not match!');
    } else {
      alert('Sign Up Successful!');
      navigate('/surefit');
    }
  };

  const handleLogin = () => {
    alert('Login Successful!');
    navigate('/surefit');
  };

  return (
    <div className="au-background">
    <div className="aupage">
      <div className="surefitpage" >
      <header className="header" id="home">
        <nav className="navbar">
          <div className="logo">
            <img src="/fitness-images/Preview.png" alt="Logo" className="logo-img"  />
            <h1 >SureFit</h1>
            </div>
            </nav>
            </header>
            </div>
    <main className='float'>
      <div className="signup">
        <span>Not a member?</span>
        <button type="button" onClick={() => setShowLogin(false)}>Sign Up</button>
      </div>
      <div className="login">
        <span>Already have an account?</span>
        <button type="button" onClick={() => setShowLogin(true)}>Login</button>
      </div>

      <div className="back-layer" style={{ clipPath: showLogin ? '' : 'inset(0 0 0 50%)' }}>
        {showLogin ? (
          <div className="win">
            <form className="login-form active" onSubmit={(e) => e.preventDefault()}>
              <h2 className="login-label">Login</h2>
              <input
                type="email"
                placeholder="📧 Email"
                required
                autoComplete="on"
                value={loginData.email}
                onChange={e => setLoginData({ ...loginData, email: e.target.value })}
              />
              <input
                type={lpasswordVisible ? 'text' : 'password'}
                required
                placeholder="🔐 Password"
                value={loginData.password}
                onChange={e => setLoginData({ ...loginData, password: e.target.value })}
              />
              <i className={`bx ${lpasswordVisible ? 'bxs-show' : 'bxs-low-vision'} yam`} onClick={() => setLPasswordVisible(!lpasswordVisible)}></i>
              <br />
              <button className="btn12" type="button" onClick={handleLogin}>Login</button>
            </form>
          </div>
        ) : (
          <div className="go">
            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              <h2>Sign Up</h2>
              <input type="text" placeholder="👨🏻 First Name" value={signUpData.firstName} onChange={e => setSignUpData({ ...signUpData, firstName: e.target.value })} />
              <input type="text" placeholder="👨🏻 Last Name" value={signUpData.lastName} onChange={e => setSignUpData({ ...signUpData, lastName: e.target.value })} />
              <input type="email" placeholder="📧 Email" value={signUpData.email} onChange={e => setSignUpData({ ...signUpData, email: e.target.value })} />
              <input type={spassword1Visible ? 'text' : 'password'} placeholder="🔐 Password" value={signUpData.password1} onChange={e => setSignUpData({ ...signUpData, password1: e.target.value })} />
              <i className={`bx ${spassword1Visible ? 'bxs-show' : 'bxs-low-vision'} yam1`} onClick={() => setSPassword1Visible(!spassword1Visible)}></i><br />
              <input type={spassword2Visible ? 'text' : 'password'} placeholder="🔐 Confirm Password" value={signUpData.password2} onChange={e => setSignUpData({ ...signUpData, password2: e.target.value })} />
              <i className={`bx ${spassword2Visible ? 'bxs-show' : 'bxs-low-vision'} yam1`} onClick={() => setSPassword2Visible(!spassword2Visible)}></i>
              <button className="btn11" type="button" onClick={handleSignUp}>Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </main>
    </div>
    </div>
  );
};

export default AUPage;
