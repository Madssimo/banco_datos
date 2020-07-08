import React from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import props from 'prop-types';

const currencies = [
  {
    value: 'Departemento1',
    label: 'Departamento 1',
  },
  {
    value: 'Departamento2',
    label: 'Departamento 2',
  },
  {
    value: 'Departamento3',
    label: 'Departamento 3',
  },
  {
    value: 'Departamento4',
    label: 'Departamento 4',
  },
];


  {/*conexion de post con react hook */ }
  
  const Concurso = () => {
    const [open, setOpen] = React.useState(false);
    const [currency, setCurrency] = React.useState('Departamento1');
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [crearConcurso, setCrearConcurso] = React.useState(
        { concurso: '', descripcion: '', fecha_inicio:  '2014-08-18T21:11:54', fecha_final: '2014-08-18T21:11:54', fecha_limite: '2014-08-18T21:11:54'}
    );

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/api/concurso', crearConcurso)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        }) 
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCrearConcurso({...crearConcurso, [event.target.name]: event.target.value})
    
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div>
      <Fab variant="extended" color="primary" onClick={handleClickOpen}>
        <AddIcon></AddIcon>
          Crear concurso
        </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Crear Concurso</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para crear un concurso por favor llenar los siguientes campos
        </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/*------------------NOMBRE CONCURSO-------------------------------*/}
              <TextField
                autoFocus
                margin="dense"
                id="nombre"     
                type="text"
                name="concurso"
                label="Nombre del concurso"
                value={crearConcurso.concurso} 
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
            {/*------------------SELECT SEDE-------------------------------*/}
              <TextField
                id="standard-select-currency"
                select
                label="Sede"
                value={currency}
                onChange={handleChange}
                helperText="Selecciona una Sede"
                fullWidth
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              {/*------------------SELECT FACULTAD-------------------------------*/}
              <TextField
                id="standard-select-currency"
                select
                label="Facultad"
                value={currency}
                onChange={handleChange}
                helperText="Selecciona una Facultad"
                fullWidth
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              {/*------------------SELECT DEPARTAMENTO-------------------------------*/}
              <TextField
                id="standard-select-currency"
                select
                label="Departamento"
                value={currency}
                onChange={handleChange}
                helperText="Selecciona un Departamento"
                fullWidth
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              {/*------------------SELECT AREA-------------------------------*/}
              <TextField
                id="standard-select-currency"
                select
                label="Area"
                value={currency}
                onChange={handleChange}
                helperText="Selecciona un Área"
                fullWidth
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around" item xs={4}>
                {/*------------------SELECT FECHA INICIO-------------------------------*/}
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  name="fecha_inicio"
                  value={crearConcurso.fecha_inicio}
                  onChange={handleChange}
                  KeyboardButtonProps={{
                    'aria-label': 'Fecha Inicio',
                  }}
                />
              </Grid>
              <Grid container justify="space-around" item xs={4}>
                {/*------------------SELECT FECHA FINAL-------------------------------*/}
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  name="fecha_final"
                  value={crearConcurso.fecha_final}
                  onChange={handleChange}
                  KeyboardButtonProps={{
                    'aria-label': 'Fecha Final',
                  }}
                />
              </Grid>
              <Grid container justify="space-around" item xs={4}>
                {/*------------------SELECT FECHA LIMITE-------------------------------*/}
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  name="fecha_limite"
                  value={crearConcurso.fecha_limite}
                  onChange={handleChange}
                  KeyboardButtonProps={{
                    'aria-label': 'Fecha Limite',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            {/*------------------DESCRIPCION-------------------------------*/}
            <TextField
              id="descripcion"
              label="Descripción"
              type="text"
              name="descripcion"
              multiline
              rowsMax={4}
              fullWidth
              value={crearConcurso.descripcion} 
              onChange={handleChange}
            />

          </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button type="submit" color="primary">
            Crear
          </Button>   
        </DialogActions>
        </form>
      </Dialog>
      
    </div>
  );
}
export default Concurso;