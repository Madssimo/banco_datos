import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    paper: {
      overflow: 'auto',
      height: 800,
    },
  
  
  }));

const HistorialParticipaciones = () => {
    const classes = useStyles();

    return <Paper className={classes.paper} elevation={3}>

        <h1>HISTORIAL PARTICIPACIONES </h1>


    </Paper>


};

export default HistorialParticipaciones;