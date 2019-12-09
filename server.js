// const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 4040;
const Router = require('./router');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
};

app.use(Router);

app.listen(PORT, function(){
    console.log(`Server now listening on PORT ${PORT}`)
});