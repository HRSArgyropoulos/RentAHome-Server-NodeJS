const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// get body in POST http requests
app.use(express.json());

// CORS for cross origin requests

app.use(cors());

// mount routes on root
app.use(routes);

// app listening for connections

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Rent A Home server app listening on http://${process.env.HOST}:${process.env.PORT}`
  );
});
