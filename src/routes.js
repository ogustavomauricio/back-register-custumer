const express = require('express');
const routes = express.Router();

const {
     createCustumerController,
     getCustumersController,
     deleteCustomerController,
     updateCustomerController,
     getCustumersByIdController,
} = require('./controllers/createCustumerController');


routes.get('/custumers', getCustumersController)
routes.get('/custumers/:id', getCustumersByIdController)
routes.post('/custumers', createCustumerController)
routes.put('/custumers/:id', updateCustomerController)
routes.delete('/custumers/:id', deleteCustomerController)

routes.get('/', (req, res) => res.send('Acesse a url /custumers'))

module.exports = routes;