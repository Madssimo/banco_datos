const database = require('../services/database.js');
const oracledb = require('oracledb');


const unidadesQuery =
    `select cod_sede "COD_SEDE",
        nombre "NOMBRE"
    
    from sedes`;

async function find_unidades(context) {
  let query = unidadesQuery;
  const binds = {};

  if (context.id) {
    binds.cod_sede = context.id; // el bind se referencia con el id de la tabla

    query += `\nwhere cod_sede = :cod_sede`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

//metodo find_facultades, ejecuta la consulta de las facultades

const facultadesQuery =
 `select fu.cod_sede "COD_SEDE",
 fu.cod_facultad "COD_FACULTAD",
 f.nombre "NOMBRE"

  from Fac_Ubc fu,facultades f `;

async function find_facultades(context) {
  let query = facultadesQuery;
  const binds = {};

  if (context.id_s) {
    binds.cod_sede = context.id_s; // el bind se referencia con el id de la tabla

    query += `\nwhere fu.cod_facultad=f.cod_facultad and fu.cod_sede= :COD_SEDE and f.tipo_facultad='FA'`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

//metodo find_departamentos, ejecuta la consulta de los departamentos

const departamentosQuery =
 `select cod_facultad "COD_FACULTAD",
    cod_depto "COD_DEPTO",
    descripcion "DESCRIPCION"
  from MAESTRO_DEPTO`;

async function find_departamentos(context) {
  let query = departamentosQuery;
  const binds = {};

  if (context.id) {
    binds.cod_facultad = context.id; // el bind se referencia con el id de la tabla

    query += `\nwhere cod_facultad = :COD_FACULTAD`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

//metodo find_areas, ejecuta la consulta para las areas de especialidad por departamento

async function find_areas(context) {
  let query;
  const binds = {};

  binds.cod_facultad = context.id_f; // el bind se referencia con el id de la tabla
  binds.cod_depto = context.id_d;
  binds.cursor={ type: oracledb.CURSOR, dir: oracledb.BIND_OUT };
  query=`BEGIN
    pkg_cur_deptoarea.consulta_deptoarea(:cod_facultad,:cod_depto,:cursor);
    END;`;

  const result = await database.simpleExecuteCursor(query, binds);

  return result;
}

module.exports.find_unidades = find_unidades;
module.exports.find_facultades = find_facultades;
module.exports.find_departamentos = find_departamentos;
module.exports.find_areas = find_areas;
