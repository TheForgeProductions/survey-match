// const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 4040;
const Router = require('express').Router();
const routes = require('./routes/index');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};
app.use(express.static("./pages"));
app.use(express.static("./data"));
// app.use(express.static("./matcher"));
app.use(routes);

app.listen(PORT, function(){
    console.log(`Server now listening on PORT ${PORT}`)
});