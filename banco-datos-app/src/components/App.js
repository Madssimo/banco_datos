import React, { Component } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Concursos from './Concurso/concursos'
export default class extends Component {
  render(){
    return <main> 
      <Header></Header>
      <Concursos></Concursos>
      <Footer></Footer>
    </main>
  }
}