require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PORT } = require('./config/env');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World, duck feeding API!');
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
