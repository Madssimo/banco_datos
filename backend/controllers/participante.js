const participantes = require('../db_apis/participante.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);

    const rows = await participantes.find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();

      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}
module.exports.get = get;

function getEmployeeFromRec(req) {
  const participante = {
    
    idparticipante: req.body.idparticipante,
    nombre1: req.body.nombre1,
    apellido1: req.body.apellido1,
    nombre2: req.body.nombre2,
    apellido2: req.body.apellido2,
    direccion: req.body.direccion,
    email: req.body.email,
    celular: req.body.celular,
    cedula: req.body.cedula,
    tel_residencia: req.body.tel_residencia,
    tel_oficina: req.body.tel_oficina,
    direccion_postal: req.body.direccion_postal,
    id_departamento: req.body.id_departamento,
    id_area: req.body.id_area,
    id_facultad: req.body.id_facultad,
    id_sede: req.body.id_sede
  };

  return participante;
}

async function post(req, res, next) {
  try {
    let participante = getEmployeeFromRec(req);

    participante = await participantes.create(participante);

    res.status(201).json(participante);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;

async function put(req, res, next) {
  try {
    let participante = getEmployeeFromRec(req);

    participante.idparticipante = parseInt(req.params.id, 10);

    participante = await participantes.update(participante);

    if (participante !== null) {
      res.status(200).json(participante);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

module.exports.put = put;

async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);

    const success = await participantes.delete(id);

    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

module.exports.delete = del;