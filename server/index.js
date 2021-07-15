const express = require('express');
const path = require('path');
const dropoffs = require('./controller/dropoffs.js');
const puppile = require('./controller/puppile.js');
const signup = require('./controller/signup.js');
const user = require('./controller/user.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.use('/dropoffs', dropoffs);
app.use('/puppile', puppile);
app.use('/signup', signup);
app.use('/user', user);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
