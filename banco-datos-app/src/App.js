import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import IndexUser from './components/Users/IndexUser';
import Concursos from './components/Concurso/concursos';

class App extends Component {
  render() {

    return (
      <Router>
        <Route path="/concursos" component={Concursos} />
        <Route path="/usuario" component={IndexUser} />
        <Route path="/" component={Main} />
      </Router>

    );
  }
}

export default App;