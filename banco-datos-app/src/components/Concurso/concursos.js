import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: { 
    overflow: 'auto',
    marginLeft: 270,
    marginRight: 30,
    height: 800,
    marginBottom: 50,
 
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400,
  },
  div: {
    padding: 30,
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
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

  );
}