// import React, { Component } from 'react';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import './ConcursosStyles.css';
// import ConcursoList from './ConcursoList';



// // class Concursos extends Component {


// //   state = { data: [] }

// //  /* componentDidMount() {
// //     fetch('http://localhost:3000/api/concurso',
// //     )
// //       .then((response) => {
// //         return response.json()
// //       })
// //       .then((data) => {
// //         console.log(data);
// //         this.setState({data})
// //       })

// //   }*/
// //   componentDidMount() {
// //     fetch('http://localhost:3000/api/concurso')
// //     .then(res => res.json())
// //     .then((data) => {
// //       this.setState({ data })
// //       console.log(data)
// //     })
// //     .catch(console.log)

// //   }

// //   render() {
// //       return (
// //         console.log("data",this.state.data),
// //         <div className="div">
// //           <Paper>
// //             <Grid container spacing={3}>

// //               <ConcursoList data={this.state.data}/>
// //             </Grid>
// //           </Paper>

// //         </div>
// //       );
// //   }
// // }

// // export default Concursos;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ConcursoCard from './ConcursoCard'
import CircularProgress from '@material-ui/core/CircularProgress';




const useStyles = makeStyles((theme) => ({
  paper: {
    overflow: 'auto',
    marginTop: 20,
    marginLeft: 270,
    marginRight: 30,
    height: 800,
    marginBottom: -60,

  },
  div: {
    margin: 30,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  formControl: {
    marginTop: 65,
    marginLeft: 280,
    minWidth: 120,
  },

}));

export default function Concursos() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [concursos, setConcursos] = React.useState([]);


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  React.useEffect(() => {
    console.log("useEffects")
    ObternetConcursos()
    

  }, [])

  const ObternetConcursos = async () => {
    const data = await fetch('http://localhost:3000/api/concurso')
    const VerConcurso = await data.json()
    console.log("Ver concurso: ", VerConcurso)
    setConcursos(VerConcurso)
  }
  const strToComponent = concursos => (

    concursos.map((concurso, id) => <Grid item xs={12} sm={3} key={concurso.id_concurso}>
      {
        <ConcursoCard
          concurso={concurso.nombre}
          descripcion={concurso.descripcion}
        />}
    </Grid>)
  );

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={1}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Area</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={1}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Departamento</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={1}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Facultad</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Paper className={classes.paper} elevation={2}>
        <div className={classes.div}>
          <Grid container spacing={3}>
            {console.log("data=", concursos)}
            {!setConcursos?<CircularProgress size={50} />:strToComponent(concursos)}
            {console.log("nombre", concursos.descripcion)}

          </Grid>
        </div>
      </Paper>
    </div>
  );
}