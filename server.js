const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/mern-stack-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Hello MERN Stack!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
