import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import IndexUser from './components/Users/IndexUser';
import Concursos from './components/Concurso/Concursos';
import Login from './components/Auth/Login';
import Documentos from './components/Users/Documentos/Documentos';
import Participaciones from './components/Users/Participaciones/Participaciones';
import Perfil from './components/Users/Profile/Perfil';
import ConcursoAdmin from './components/Concurso/CrearConcurso/ConcursoAdmin';


class App extends Component {
  render() {

    return (
      <Router>
        <Route path="/concursos" component={Concursos} />
        <Route exact path="/usuario" component={IndexUser} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/documentos" component={Documentos} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/participaciones" component={Participaciones} />
        <Route exact path="/Administrador" component={ConcursoAdmin} />

{/*<Route component={PageNotFound}/>*/}
        <Route path="/*" component={Main} />

      </Router>

    ); 
  }
}

export default App;