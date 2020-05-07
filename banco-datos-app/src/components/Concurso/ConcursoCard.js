import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 400,
    },

    button: {
        marginTop: 250,
    }

}));

const ConcursoCard = ({ concurso }) => {

    const classes = useStyles();

    console.log(concurso);
    return (
        <div>
            <Paper className={classes.paper2} elevation={3}>
                <h1>{concurso}</h1>
                <div className={classes.button}>
                    <Button variant="outlined" color="primary">
                        Ver
                        </Button>
                </div>
            </Paper>
        </div>
    );
};

export default ConcursoCard;