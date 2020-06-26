const express = require('express');
const router = new express.Router();
const participantes = require('../controllers/participante.js');
const concursos = require('../controllers/concurso.js');

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


module.exports = router;