import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import { isAuthenticated } from "./services/auth";

const Logon = lazy(() => import('./pages/Logon/index'));
const Cadastro = lazy(() => import('./pages/CadastroFuncionario/index'))

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Link to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

const Rout = () => (
    <Router>
        <Suspense fallback={<div></div>}>
            <Routes>
                <Route path="/" element={<Logon/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
            </Routes>
        </Suspense>
    </Router>
)

export default Rout;