import React from 'react'
import ConcursoCard from './ConcursoCard'
import Grid from '@material-ui/core/Grid';

const Concursos = ({ concursos= []}) => {
  return (
    <div>
      {concursos.map((concurso,id) => (
        <Grid item xs={12} sm={10} key={concurso.id_concurso_apertura}>
        <ConcursoCard
        Nombre={concurso.concurso}
        descripcion={concurso.descripcion}
        />
        </Grid>
        
      ))}
    </div>
    
  )
};

export default Concursos;