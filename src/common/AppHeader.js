// AppHeader.js

import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './AppHeader.css';
import Footer from './Footer';
import { ACCESS_TOKEN } from '../constants';
import Alert from 'react-s-alert';

const AppHeader = ({ authenticated, onLogout, showProfileLogout }) => {
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    onLogout();
    Alert.success("You're safely logged out!");
  };

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="app-header">
      <div className="container">
        <div className="app-branding">
          <Link to="/" className="app-title">Log Ingestor & Query Interface</Link>
        </div>
        <div className="app-options">
          <nav className="app-nav">
            {(currentPath=='/filter' || currentPath=='/profile') ? (
    
                <ul>
                  {/* <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li> */}
                  <li>
                  <NavLink style={{color:"white",fontSize:"18px"}} to="/"> Logout</NavLink>
                  </li>
                </ul>
              ) 
             : (
              <ul>
                <li>
                  <NavLink to="/login"><h3>Login</h3></NavLink>
                </li>
                <li>
                  <NavLink to="/signup"><h3>SignUp</h3></NavLink>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
      <br>
      </br>
      <Footer/>
    
    </header>
  );
};

export default AppHeader;
