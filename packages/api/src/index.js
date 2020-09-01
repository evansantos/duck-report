require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/env');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
