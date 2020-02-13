import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';
import './style.scss'

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  },[])
  
  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message(data.message)
    } catch (err) {
    }
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId)
    } catch (err) {
    }
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Сократи Ссылку</h1>
        <div className="card">
          <div className="card-content white-text">
            <span className="card-title ">Авторизация</span>
          </div>
          <form>
            <div className="input-field">
              <input
                placeholder="Email"
                id="email"
                type="text"
                className="validate"
                name="email"
                onChange={changeHandler} />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input
                placeholder="Password"
                id="password"
                type="password"
                className="validate"
                autoComplete="off"
                name="password"
                onChange={changeHandler} />
              <label htmlFor="password">Password</label>
            </div>
          </form>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              disabled={loading}
              onClick={loginHandler}>Войти</button>
            <button
              className="btn grey lighten-1 black-text"
              disabled={loading}
              onClick={registerHandler}>Регистрация</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage;
