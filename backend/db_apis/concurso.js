const oracledb = require('oracledb');
const database = require('../services/database.js');

//--------------------------------------------------------------------
//----------------------- FIND FUNCTION ------------------------------
const baseQuery =
 `select id_concurso "id",
    cod_area "Código de Área",
    cod_departamento "Código de departamento",
    cod_facultad "Código de facultad",
    cod_sede "Código de sede",
    id_usuario_resp "ID usuario",
    descripcion "descripcion",
    concurso "nombre",
    fecha_apertura "Fecha de apertura",
    fecha_cierre "Fecha de cierre",
    fecha_limite "Fecha limite",
    estatus "Estatus",
    computador_insert "Agregado el:",
    fecha_bd_insert "Fecha de insertado:",
  from concurso`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.id_concurso = context.id;

    query += `\nwhere id_concurso = :id_concurso`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

//--------------------------------------------------------------------
//----------------------- CREATE FUNCTION ----------------------------

const createSql =
 `insert into concurso (
    cod_area,
    cod_departamento,
    cod_facultad,
    cod_sede,
    id_usuario_resp,
    descripcion,
    concurso,
    estatus,
    fecha_apertura,
    fecha_cierre,
    fecha_limite,
    computador_insert,
    fecha_bd_insert
  ) values (
    :cod_area,
    :cod_departamento,
    :cod_facultad,
    :cod_sede,
    :id_usuario_resp,
    :descripcion,
    :concurso,
    :estatus,
    :fecha_apertura,
    :fecha_cierre,
    :fecha_limite,
    :computador_insert,
    :fecha_bd_insert
  ) returning id_concurso
  into :id_concurso`;
  

async function create(emp) {
  const concurso = Object.assign({}, emp);

  concurso.id_concurso = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }

  const result = await database.simpleExecute(createSql, concurso);

  concurso.id_concurso = result.outBinds.id_concurso[0];

  return concurso;
}

module.exports.create = create;

//--------------------------------------------------------------------
//----------------------- UPDATE FUNCTION ----------------------------

const updateSql =
 `update concurso

   set  
    concurso          =  :concurso,
    descripcion       =  :descripcion,
    estatus           =  :estatus,
    fecha_apertura    =  :fecha_apertura,
    fecha_cierre      =  :fecha_cierre,
    fecha_limite      =  :fecha_limite,
    computador_update =  :computador_update,
    fecha_bd_update   =  :fecha_bd_update,
    id_departamento   =  :id_departamento,
    id_area           = :id_area,
    id_facultad       = :id_facultad,
    id_sede           = :id_sede
  where id_concurso = :id_concurso`;

async function update(emp) {
  const concurso = Object.assign({}, emp);
  const result = await database.simpleExecute(updateSql, concurso);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return concurso;
  } else {
    return null;
  }
}

module.exports.update = update;

//--------------------------------------------------------------------
//----------------------- DELETE FUNCTION ----------------------------


const deleteSql =
 `begin

    delete from concurso
    where id_concurso = :id_concurso;

    :rowcount := sql%rowcount;

  end;`

async function del(id) {
  const binds = {
    id_concurso: id,
    rowcount: {
      dir: oracledb.BIND_OUT,
      type: oracledb.NUMBER
    }
  }
  const result = await database.simpleExecute(deleteSql, binds);

  return result.outBinds.rowcount === 1;
}

module.exports.delete = del;
