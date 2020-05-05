import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  paper: { 
    overflow: 'auto',
    marginTop: 30,
    marginLeft: 270,
    marginRight: 30,
    height: 800,
    marginBottom: -60,
 
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400,
  },
  div: {
    padding: 30,
  },

  formControl: {
    marginTop: 80,
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
    <Grid item xs={12} sm={3}>
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
    <Grid item xs={12} sm={3}>
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
    <Grid item xs={12} sm={3}>
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
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper2} elevation={3} >xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper2} elevation={3}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper2} elevation={3}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper2} elevation={3}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper2} elevation={3}>xs=12</Paper>
            </Grid>
          </Grid>
          </div>
        </Paper>
        </div>
  );
}