const express = require('express')
const cors = require('cors');
const appRouter = require('./routes/appRoutes')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', appRouter)

module.exports = app