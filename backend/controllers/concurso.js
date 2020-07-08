const concursos = require('../db_apis/concurso.js');
//const express = require('express');
//const route = require('../services/router.js');
const controller= {};
controller.concurso =async function get(req, res, next) {
    try {
      const context = {};

      context.id = parseInt(req.params.id, 10);

      const rows = await concursos.find(context);

      if (req.params.id) {
        if (rows.length === 1) {
          res.render('customer',{
            data: rows
          });
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


  controller.save = async function post(req, res, next) {

    try {
      let concurso = getConcursoFromRec(req);

      concurso = await concursos.create(concurso);
     res.redirect('/list');
    //    res.send('work');
        console.log(concurso);
      //res.status(201).json(participante);

    } catch (err) {
      next(err);
    }
  }

controller.delete=async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);

    const success = await concursos.delete(id);

    if (success) {
         res.redirect('/list');
    //  res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}
//res.send("hello world");


async function get(req, res, next) {
  try {
    const context = {};

    context.id = parseInt(req.params.id, 10);

    const rows = await concursos.find(context);

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

//post
function getConcursoFromRec(req) {
  const concurso = {
    descripcion: req.body.descripcion,
    concurso: req.body.concurso,
    fecha_apertura: req.body.fecha_apertura,
    fecha_cierre: req.body.fecha_cierre,
    fecha_limite: req.body.fecha_limite
    
  };

  return concurso;
}

async function post(req, res, next) {
  try {
    let concurso = getConcursoFromRec(req);

    concurso = await concursos.create(concurso);
  console.log(req.body);
    res.status(201).json(concurso);
  } catch (err) {
    next(err);
  }
}

//update
async function put(req, res, next) {
  try {
    let concurso = getConcursoeFromRec(req);

    concurso.id = parseInt(req.params.id, 10);

    concurso = await concursos.update(concurso);

    if (concurso !== null) {
      res.status(200).json(concurso);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

//delete
async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);

    const success = await concursos.delete(id);

    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}
module.exports=controller;
module.exports.delete = del;
module.exports.put = put;
module.exports.post = post;
module.exports.get = get;
