const { Router } = require('express');
const curriculumsController = require('../controllers/curriculumsController')();

function curriculumsRouter() {
  const routes = Router();
  routes.route('/')
    .get(curriculumsController.getAll)
    .post(curriculumsController.createOne);
  return routes;
}

module.exports = curriculumsRouter();
