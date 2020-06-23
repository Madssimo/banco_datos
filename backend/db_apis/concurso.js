const oracledb = require('oracledb');
const database = require('../services/database.js');

//--------------------------------------------------------------------
//----------------------- FIND FUNCTION ------------------------------
const baseQuery =
 `select id_concurso_apertura "id",
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
    computador_update "Actualizado el:",
    fecha_bd_insert "Fecha de insertado el:",
    fecha_bd_update "Fecha de actualizado:"
  from concurso`;

async function find(context) {
  let query = baseQuery;
  const binds = {};

  if (context.id) {
    binds.id_concurso_apertura = context.id;

    query += `\nwhere id_concurso_apertura = :id_concurso_apertura`;
  }

  const result = await database.simpleExecute(query, binds);

  return result.rows;
}

module.exports.find = find;

//--------------------------------------------------------------------
//----------------------- CREATE FUNCTION ----------------------------

/*const createSql =
 `insert into participante (
    nombre1,
    nombre2,
    apellido1,
    apellido2,
    cedula,
    direccion_postal,
    email,
    direccion,
    tel_residencia,
    celular,
    tel_oficina,
    id_facultad,
    id_area,
    id_sede,
    id_departamento
  ) values (
    :nombre1,
    :nombre2,
    :apellido1,
    :apellido2,
    :cedula,
    :direccion_postal,
    :email,
    :direccion,
    :tel_residencia,
    :celular,
    :tel_oficina,
    :id_facultad,
    :id_area,
    :id_sede,
    :id_departamento
  ) returning idparticipante
  into :idparticipante`;

async function create(emp) {
  const participante = Object.assign({}, emp);

  participante.idparticipante = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }

  const result = await database.simpleExecute(createSql, participante);

  participante.idparticipante = result.outBinds.idparticipante[0];

  return participante;
}

module.exports.create = create;

//--------------------------------------------------------------------
//----------------------- UPDATE FUNCTION ----------------------------

const updateSql =
 `update participante

   set  
    nombre1    =  :nombre1,
    apellido1  =  :apellido1,
    nombre2    =  :nombre2,
    apellido2  =  :apellido2,
    direccion  =  :direccion,
    email      =  :email,
    celular    =  :celular,
    cedula     =  :cedula,
    tel_residencia  =  :tel_residencia,
    tel_oficina     =  :tel_oficina,
    direccion_postal  =  :direccion_postal,
    id_departamento   =  :id_departamento,
    id_area    = :id_area,
    id_facultad      = :id_facultad,
    id_sede    = :id_sede
  where idparticipante = :idparticipante`;

async function update(emp) {
  const participante = Object.assign({}, emp);
  const result = await database.simpleExecute(updateSql, participante);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return participante;
  } else {
    return null;
  }
}

module.exports.update = update;

//--------------------------------------------------------------------
//----------------------- DELETE FUNCTION ----------------------------


const deleteSql =
 `begin

    delete from participante
    where idparticipante = :idparticipante;

    :rowcount := sql%rowcount;

  end;`

async function del(id) {
  const binds = {
    idparticipante: id,
    rowcount: {
      dir: oracledb.BIND_OUT,
      type: oracledb.NUMBER
    }
  }
  const result = await database.simpleExecute(deleteSql, binds);

  return result.outBinds.rowcount === 1;
}

module.exports.delete = del;*/
