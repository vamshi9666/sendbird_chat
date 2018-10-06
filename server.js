const express = require('express');
const path = require('path')
const app = express();





app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));