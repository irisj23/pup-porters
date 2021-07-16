const express = require('express');
const path = require('path');
const dropoffs = require('./controller/dropoffs.js');
const puppile = require('./controller/puppile.js');
const signup = require('./controller/signup.js');
const user = require('./controller/user.js');
const maphelper = require('./mapHelper');

const app = express();
const port = 3000;

/*
  routes

    POST /login
    GET /dropoffs DONE
    GET /availablePiles (all available_piles)
    POST /availablePile (caregiver_user_id == logged in user)
    POST /claimedPile (remover_user_id == logged in user, also deletes availablePile)
    DELETE /claimedPile (logged in user id must match remover_user_id)

  3 maps to generate
  - "remover" shows if user is remover
  - "caregiver" shows if user is caregiver
  - "dropoff" shows for both removes and caregivers

*/

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());

app.use('/dropoffs', dropoffs);
app.use('/puppile', puppile);
app.use('/signup', signup);
app.use('/user', user);

app.get('/center', async (req, res) => {
  console.log(req.query.input)
  try {
    const result = await maphelper.getLongLatByPlace(req.query.input);
    console.log('get place result here:')
    console.log(result);
    res.status(200).send(result)
  } catch(error) {
    console.log('get place error here:')
    console.log(error)
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
