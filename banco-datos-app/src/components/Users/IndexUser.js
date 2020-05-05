import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: { 
    overflow: 'auto',
    marginTop: 90,
    marginLeft: 270,
    marginRight: 30,
    height: 400,
    marginBottom: -60,
 
  },
  div: {
    padding: 30,
  },
  root: {
    marginTop: 30
  },
}));

export default function IndexConcurso() {
  const classes = useStyles();

  return (
      <Paper className={classes.paper} elevation={2}>
            <Grid container direction="row" justify="space-evenly"   alignItems="center">

         <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image="https://image.flaticon.com/icons/svg/1077/1077012.svg"
            title="Profile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Perfil
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image="https://image.flaticon.com/icons/png/512/2338/2338616.png"
            title="Documentos"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Documentos
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image="https://image.flaticon.com/icons/png/512/1403/1403195.png"
            title="Participaciones"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Participaciones
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             
          </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
      </Grid>
      </Paper>

  );
}