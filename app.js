const express = require('express')
const cors = require('cors');
const appRouter = require('./routes/appRoutes')
const glabalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(cors());
app.use(express.json());

//Rotuers
app.use('/api/v1', appRouter)
app.use(glabalErrorHandler);
module.exports = app