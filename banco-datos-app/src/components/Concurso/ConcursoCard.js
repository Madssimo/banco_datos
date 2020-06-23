import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ConcursoDetalle from './concursoDetalle';
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
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 400,
    },
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
    }

}));

const ConcursoCard = ({ nombre, descripcion , id}) => {
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

    console.log("holaaaa",nombre);
    return (
        <div>
            <Paper className={classes.paper2} elevation={3}>
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <h6 class="card-subtitle mb-2 text-muted">{id}</h6>
                <div className={classes.button}>
                    <Button variant="outlined" color="primary" onClick={handleOpen}> Ver </Button>
                    
                 {/* ventana modal*/}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>
                </div>
            </Paper>
        </div>
    );
};

export default ConcursoCard;