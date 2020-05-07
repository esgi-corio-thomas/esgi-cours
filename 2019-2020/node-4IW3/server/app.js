const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  console.log(req);
  res.json({msg: "Hello"});
});

app.listen(3000, () => console.log("listening"));