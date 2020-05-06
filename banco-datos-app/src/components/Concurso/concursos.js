import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ConcursoCard from './ConcursoCard'

const concursos = [
  'Concurso 1',
  'Concurso 2',
  'Concurso 3',
  'Concurso 4',
  'Concurso 5',
  'Concurso 6',
  'Concurso 7',
  'Concurso 8',
  'Concurso 9',
  'Concurso 10',
  'Concurso 11',
  'Concurso 12',

];

const strToComponent = concursos => (

  concursos.map(concurso => <Grid item xs={12} sm={3}> <ConcursoCard concurso={concurso}> </ConcursoCard> </Grid>)

);

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
  },

  formControl: {
    marginTop: 65,
    marginLeft: 280,
    minWidth: 120,
  },

}));

export default function SimplePaper() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


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
            
            {strToComponent(concursos)}
         
          </Grid>
        </div>
      </Paper>
    </div>
  );
}