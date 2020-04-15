import React, { Component } from 'react';
import Header from './Layout/Header';
import Dashboard from './Dashboard';

export default class extends Component {
  render(){
    return <div>
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  }
}