const universidad = require('../db_apis/universidad.js');
const controller= {};

  controller.list_facultades =async function get(req, res, next) {
      try {
        const context = {};

        context.id_s = parseInt(req.params.id_s, 10);
        if (req.params.id_s) {
            const rows = await universidad.find_facultades(context);
              res.status(200).json(rows);
        } else {
          res.status(404).end();
        }
      } catch (err) {
        next(err);
      }
    }

    controller.list_departamentos =async function get(req, res, next) {
        try {
          const context = {};

          context.id = parseInt(req.params.id, 10);

          if (req.params.id) {
            const rows = await universidad.find_departamentos(context);
                res.status(200).json(rows);

          } else {
            res.status(404).end();
          }
        } catch (err) {
          next(err);
        }
      }


      controller.list_areas =async function get(req, res, next) {
          try {
            const context = {};

            context.id_f = parseInt(req.params.id_f, 10);
                context.id_d = parseInt(req.params.id_d, 10);

            if (req.params.id_f && req.params.id_d) {
              const rows = await universidad.find_areas(context);
                  res.status(200).json(rows);

            } else {
              res.status(404).end();
            }
          } catch (err) {
            next(err);
          }
        }


  controller.list_unidades =async function get(req, res, next) {
      try {
        const context = {};

        context.id = parseInt(req.params.id, 10);

        const rows = await universidad.find_unidades(context);

        if (req.params.id) {
          if (rows.length === 1) {
              res.status(200).json(rows[0]);
          } else {
            res.status(404).end();

          }
        } else {
            console.log(req.body.nombre);
          res.status(200).json(rows);
        }
      } catch (err) {
        next(err);
      }
    }

module.exports=controller;