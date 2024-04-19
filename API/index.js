//Dependencias
const express = require('express');
const app = express();
const morgan = require('morgan');
//Routes
const humanresources = require('./routes/humanresources');
//Middleware
const notFound = require('./Middleware/notFound')
const index = require('./Middleware/index');
const cors = require('./Middleware/cors')

app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", index);
app.use("/humanresources", humanresources);
app.use(notFound);

//Servidor
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is runnning...");
})