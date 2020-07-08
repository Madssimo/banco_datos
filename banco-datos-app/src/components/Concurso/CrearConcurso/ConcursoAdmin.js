import React from 'react';
import ModalCrear from './ModalCrear';
import Concursos from './../Concursos';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(1),
       marginTop: 30,
    marginLeft: 270,
    //marginRight: 30,
    marginBottom: -60,
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(60),
  },
}));
export default function SimplePaper() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
         <Concursos></Concursos>
         <ModalCrear></ModalCrear>
    

    </div>
  );
}