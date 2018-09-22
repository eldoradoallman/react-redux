import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const HeaderComponent = ({ logo, isSidebarOpen, toggleSidebarMenu, loggedIn, register, logout }) => (
  <div id="header">
    <div id="header-wrapper" className="clear">
      <div id="header-top">
        <Link to="/" id="logo">
          <img src={logo} width="150" alt="React Logo" />
        </Link>
      </div>
      {
        !loggedIn ?
        <div id="user-info">
          <button onClick={() => register({ username: 'duaneallman', password: 'duane1986' })}>REGISTER</button>
        </div>
        :
        <div id="user-info">
          <button onClick={logout}>LOGOUT</button>
        </div>
      }
      <div id="header-bottom">
        <div id="toggle-sidebar-menu" className={isSidebarOpen ? 'open' : ''} onClick={toggleSidebarMenu}></div>
        <div id="desktop-menu-wrapper">
          <ul>
            <li className="desktop-menu">
              <NavLink to="/" exact activeClassName="selected">HOME</NavLink>
            </li>
            <li className="desktop-menu">
              <NavLink to="/category/entertainment" activeClassName="selected">ENTERTAINMENT</NavLink>
            </li>
            <li className="desktop-menu">
              <NavLink to="/category/livestyle" activeClassName="selected">LIVE STYLE</NavLink>
            </li>
            <li className="desktop-menu">
              <NavLink to="/category/techno" activeClassName="selected">TECHNO</NavLink>
            </li>
            <li className="desktop-menu">
              <NavLink to="/category/about-you" activeClassName="selected">ABOUT YOU</NavLink>
            </li>
            <li className="desktop-menu">
              <NavLink to="/category/ideas" activeClassName="selected">IDEAS</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderComponent;
