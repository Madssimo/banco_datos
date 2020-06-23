import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './ConcursosStyles.css';
import ConcursoList from './ConcursoList';



class Concursos extends Component {
  

  state = { data: [] }

 /* componentDidMount() {
    fetch('http://localhost:3000/api/concurso',
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        this.setState({data})
      })

  }*/
  componentDidMount() {
    fetch('http://localhost:3000/api/concurso')
    .then(res => res.json())
    .then((data) => {
      this.setState({ data })
      console.log(data)

    })
    .catch(console.log)
  
  }
 
  

  render() {
      return (
        console.log("data",this.state.data),
        <div className="div">
          <Paper>
            <Grid container spacing={3}>
              
              <ConcursoList data={this.state.data}/>
            </Grid>
          </Paper>
          
        </div>
      );
  }
}

export default Concursos;