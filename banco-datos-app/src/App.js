import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import IndexUser from './components/Users/IndexUser';
import Concursos from './components/Concurso/Concursos';
import Login from './components/Auth/Login';
import Documentos from './components/Users/Documentos/Documentos';
import Participaciones from './components/Users/Participaciones/Participaciones';
import Perfil from './components/Users/Profile/Perfil';


class App extends Component {
  render() {

    return (
      <Router>
        <Route path="/concursos" component={Concursos} />
        <Route path="/usuario" exact component={IndexUser} />
        <Route path="/login" exact component={Login} />
        <Route path="/documentos" exact component={Documentos} />
        <Route path="/perfil" exact component={Perfil} />
        <Route path="/participaciones" exact component={Participaciones} />


        <Route path="/*" component={Main} />

      </Router>

    );
  }
}

export default App;