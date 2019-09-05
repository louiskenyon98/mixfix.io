const path = require('path');

const express = require("express"),
    app = express(),
    port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/hello', (req, res) => {
  res.send({
    hello: 'world'
  });
});

app.listen(port, () => console.log(`port: ${port}`));