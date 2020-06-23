import React from 'react'
import ConcursoCard from './ConcursoCard'

const Concursos = ({ data= []}) => {
  return (
    <div>
      {data.map((concursos) => (
        <ConcursoCard
        key={concursos.id}
        ID={concursos.id_concurso_apertura}
        Nombre={concursos.nombre}
        descripcion={concursos.descripcion}
        />
        
      ))}
               {console.log(Concursos.descripcion)}

    </div>
    
  )
};

export default Concursos;