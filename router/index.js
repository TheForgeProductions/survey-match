const Router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('/htmlRoutes');

Router.use('/api', apiRoutes);
Router.use('/', htmlRoutes);