import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    paper: {
      overflow: 'auto',
      height: 800,
    },
  
  
  }));

const ParticipacionesActivas = () => {
    const classes = useStyles();

    return <Paper className={classes.paper} elevation={3}>
        <h1>PARTICIPACIONES ACTIVAS</h1>
    </Paper>

};

export default ParticipacionesActivas;