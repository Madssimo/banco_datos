import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 30,
    marginLeft: 270,
    marginRight: 30,
    height: 800,
    marginBottom: -60,

  },
  div: {
    padding: 30,
  },


}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div>

      <Paper  elevation={2}>
        <Typography variant="h3" gutterBottom>
          Descripcion
            </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
      </Paper>
      <Button variant="contained" color="primary" className={classes.button} endIcon={<Icon>send</Icon>}>Send</Button>
    </div>
  );
}