const express = require('express');
const router = new express.Router();
const participantes = require('../controllers/participante.js');
const concursos = require('../controllers/concurso.js');
const universidad = require('../controllers/universidad.js');
const cors = require('cors');


router.use(cors())
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', false);
  next();
});


/*---------------------- ROUTER PARTICIPANTE --------------------------*/

router.route('/participante/:id?')
  .get(participantes.get)
  .post(participantes.post)
  .put(participantes.put)
  .delete(participantes.delete);


/*---------------------- ROUTER COCNURSO --------------------------*/

router.route('/concurso/:id?')
  .get(concursos.get)
  .post(concursos.post)
  .put(concursos.put)
  .delete(concursos.delete);

  /*-------------------- ROUTER UNIVERSIDAD -----------------------*/

  router.get('/sede',universidad.list_unidades);//sedes
  router.get('/facultad/:id_s?',universidad.list_facultades);//facultades parametro id sede
  router.get('/departamento/:id?',universidad.list_departamentos);//departamentos parametro id facultad
  router.get('/area/:id_f?/:id_d?',universidad.list_areas);// areas parametro id facultad y departamento


module.exports = router;