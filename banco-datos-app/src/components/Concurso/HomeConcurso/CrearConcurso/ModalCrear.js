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
import { SnackbarProvider } from "notistack";
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { useSnackbar } from "notistack";



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


  
  const Concurso = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    
    const [open, setOpen] = React.useState(false);
    const [currency, setCurrency] = React.useState('Departamento1');
    //const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [crearConcurso, setCrearConcurso] = React.useState(
        { concurso: '', descripcion: '', fecha_apertura: '' , fecha_cierre: '', fecha_limite: ''}
    );
    const [sede, setSede] = React.useState([]);
    const [modalInsertar, setModalInsertar]=React.useState(false);

    const handleSubmit = async(e) => {
      
      e.preventDefault()
      await axios.post('http://localhost:3000/api/concurso', crearConcurso)
        .then(function (response) 
        {
          handleClose();
          enqueueSnackbar('Creado con éxito', { 
            variant: 'success',
        });
        })
        .catch(function (error) {
            console.log(error)
        }) 
  }

  

    

  React.useEffect(async() => {
    console.log("Sede")
    await ObtenerSede();


  }, [])
 

  
  const ObtenerSede=async()=>{
    await axios.get('http://localhost:3000/api/sede')
    .then(response=>{
      setSede(response.data);
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
  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }


  return (
    <div>
      <Fab  aria-label="add" color="primary" onClick={handleClickOpen}>
        <AddIcon />  
      </Fab>
      <Fab  aria-label="EditTwoTone" color="primary" onClick={handleClickOpen}>
        <EditTwoToneIcon />  
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
                value={sede.NOMBRE}
                onChange={handleChange}
                helperText="Selecciona una Sede"
                fullWidth
              >
                {sede.map((nombre, id) => (
                  <MenuItem key={nombre.COD_SEDE} value={nombre.NOMBRE}>
                    {nombre.NOMBRE}
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
            <Grid container justify="space-around" item xs={4}>
                {/*------------------SELECT FECHA INICIO-------------------------------*/}
                
                <TextField
                  autoFocus
                  margin="dense"
                  id="Fecha de apertura"
                  label="Fecha de Inicio"
                  type="date"
                  fullWidth
                  name="fecha_apertura"
                  value={crearConcurso.fecha_apertura}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid container justify="space-around" item xs={4}>
                {/*------------------SELECT FECHA FINAL-------------------------------*/}
                
                <TextField
                  autoFocus
                  margin="dense"
                  id="Fecha de cierre"
                  label="Fecha final"
                  type="date"
                  fullWidth
                  name="fecha_cierre"
                  value={crearConcurso.fecha_cierre}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid container justify="space-around" item xs={4}>
                {/*------------------SELECT FECHA LIMITE-------------------------------*/}
                <TextField
                  autoFocus
                  margin="dense"
                  id="Fecha limite"
                  label="Fecha límite"
                  type="date"
                  fullWidth
                  name="fecha_limite"
                  value={crearConcurso.fecha_limite}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
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
          <Button type="submit" color="primary" >
            Crear
          </Button>  
          
        </DialogActions>
        </form>
      </Dialog>
      
    </div>
  );
}
export default Concurso;