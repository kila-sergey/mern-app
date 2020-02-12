import React from 'react';
import './style.scss'

const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Сократи Ссылку</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title ">Авторизация</span>
          </div>
          <form autoComplete="off">
            <div className="input-field">
              <input placeholder="Email" id="email" type="text" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input placeholder="Password" id="password" type="text" className="validate" autocomplete="off" />
              <label htmlFor="password">Password</label>
            </div>
          </form>
          <div className="card-action">
            <button className="btn yellow darken-4">Войти</button>
            <button className="btn grey lighten-1 black-text">Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage;
