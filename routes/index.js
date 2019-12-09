const Router = require('express').Router();
const apiRoutes = require('./APIroutes');
const htmlRoutes = require('./htmlRoutes');

Router.use('/api', apiRoutes);
Router.use('/', htmlRoutes);


module.exports = Router;