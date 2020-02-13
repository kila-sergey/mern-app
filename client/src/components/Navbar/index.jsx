import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import './style.scss';

export const NavBar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) =>{
    event.preventDefault();
    auth.logout();
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <span href="/" className="brand-logo">Сокращение ссылок</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Ссылки</NavLink></li>
          <li><NavLink to="/links">Создать</NavLink></li>
          <li><a href="/" onClick={(e)=>logoutHandler(e)}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}
