import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ConcursoDetalle from './concursoDetalle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
   
    paperModal: {
        position: 'cover',
        height: 800,
        width: 800,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[50],
        padding: theme.spacing(2, 4, 3),
    },

    button: {
        marginTop: 250,
    },
     root: {
    maxWidth: 'cover',
  },
  media: {
    height:140,
  },
  MediaContent: {
    height:100,
  },
  MediaButton: {
    height:100,
  },

}));

const ConcursoCard = ({ id, concurso , descripcion}) => {
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paperModal}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
            <ConcursoDetalle />
        </div>
    );

    return (
        <div>
            <Paper className={classes.paper2} elevation={10}>
             {/* <h1>{concurso}</h1>
                <p>{descripcion}</p>
                <h6 class="card-subtitle mb-2 text-muted">{id}</h6>
                <div className={classes.button}>
                    <Button variant="outlined" color="primary" onClick={handleOpen}> Ver </Button>
                    
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>
                </div> */}
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://i.pinimg.com/originals/70/e9/c2/70e9c2ecb855710da133070c9ecc1934.png"
                    title="Contemplative Reptile"
                    />
                    <CardContent  className={classes.MediaContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {concurso}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descripcion}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.MediaButton}>
                    <Button size="small" color="primary">
                    Concursar
                    </Button>
                    <Button size="small" color="primary">
                    Ver más
                    </Button>
                    
                </CardActions>
                </Card>
            </Paper> 
        </div>
    );
};

export default ConcursoCard;