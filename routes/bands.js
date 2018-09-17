const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/bands", (request, response, next) => {
  queries.list('bands').then(bands => {
      response.json({bands});
  }).catch(next);
});

router.get("/bands/:id", (request, response, next) => {
  queries.read("bands", request.params.id).then(bands => {
      bands
          ? response.json({bands})
          : response.status(404).json({message: 'Not found'})
  }).catch(next);
});

router.post("/band", (request, response, next) => {
  queries.create("bands", request.body).then(bands => {
      response.status(201).json({bands: bands});
  }).catch(next);
});

router.delete("/:id", (request, response, next) => {
  queries.delete("bands", request.params.id).then(() => {
      response.status(204).json({deleted: true});
  }).catch(next);
});

router.put("/:id", (request, response, next) => {
  queries.update("bands", request.params.id, request.body).then(bands => {
      response.json({bands: bands[0]});
  }).catch(next);
});

module.exports = router;