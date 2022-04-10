import React, { useState } from 'react';

import api from '../../services/api';

import Logo from '../../img/LogoLGRolamentosLogin.png'

import './styles.css';

function Logon() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('api/login', { name, password });
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="login-container">

      <img src={Logo}/>

      <section className="form">

        <form onSubmit={handleLogin}>
          <h3 style={{color: 'white'}}>Login: </h3>
          <input 
            placeholder="Digite seu Usuário"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <h3 style={{color: 'white'}}>Senha: </h3>
          <input 
            placeholder="Digite sua Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="button" type="submit">Logar</button>
        </form>
      </section>
    </div>
  );
}

export default Logon;