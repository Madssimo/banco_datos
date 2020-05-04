import React, { Component } from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Concursos from './Concurso/concursos'
export default class extends Component {
  render(){
    return <main className="{'py-0 px-0 my-0 mx-0': specialPage}" > 
      <Header></Header>
      <Concursos></Concursos>
      <Footer></Footer>
    </main>
  }
}