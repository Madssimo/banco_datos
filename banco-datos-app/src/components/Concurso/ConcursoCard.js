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
        position: 'relative',
        height: 800,
        width: 800,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },

    button: {
        marginTop: 250,
    },
     root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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

    console.log("holaaaa",concurso);
    return (
        <div>
            <Paper className={classes.paper2} elevation={10}>
                {/* <h1>{concurso}</h1>
                <p>{descripcion}</p>
                <h6 class="card-subtitle mb-2 text-muted">{id}</h6>
                <div className={classes.button}>
                    <Button variant="outlined" color="primary" onClick={handleOpen}> Ver </Button>
                    
                 {/* ventana modal
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>
                </div>*/}
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://www.wallpaperup.com/uploads/wallpapers/2015/06/24/732277/487ac9de75b8545f1cbd526b07000e9f.jpg"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {concurso}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descripcion}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
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