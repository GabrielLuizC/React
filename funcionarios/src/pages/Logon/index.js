import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import api from '../../services/api';
import { login } from "../../services/auth";

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../../img/LogoLGRolamentosLogin.png'

import './styles.css';

/*function Logon() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('api/auth/login', { name, password });
      localStorage.setItem('token', response.data.token);
      
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }*/

  
class Logon extends Component {
  state = {
    name: "",
    password: "",
    error: ""
  };

  handleLogin = async e => {
    e.preventDefault();
    const { name, password } = this.state;
    if (!name || !password) {
      this.setState({ error: "Preencha o nome e senha para continuar!" });
    } else {
      try {
        const response = await api.post("api/auth/login", { name, password });
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais"
        });
      }
    }
  };

  render(){ 
  return (
      <div className='login'> 
        <Container component="main" maxWidth='xs'>
          <div className='mt-3 mt-md-5 d-flex flex-column align-items-center'>
            <img className='' src={Logo} alt='Logo'/>
          </div>

          <form onSubmit={this.handleLogin} className='form'>
          {this.state.error && <p>{this.state.error}</p>}
            <TextField className='mb-4' 
              helperText=""
              id="name" 
              color='primary'
              label="Usuário" 
              onChange={e => this.setState({name: e.target.value})}
              variant="standard"
              fullWidth
              required
              type="text" />

            <TextField className='mb-3'
              id="password" 
              color='primary'
              label="Senha" 
              variant="standard"
              onChange={e => this.setState({password: e.target.value})}
              fullWidth
              required
              type="password" />


            <button className="button" type="submit">Entrar</button>
            <hr />
            <Link to="/Cadastro">Criar conta grátis</Link>
          </form>
        </Container>
      </div>
      );
  }
}

export default Logon;