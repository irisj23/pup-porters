const express = require('express');
const model = require('../model/puppile.js');
const router = express.Router();

// Caregivers
router.post('/caregiver', (req, res) => {
  const { uid, lat, lng } = req.params;
  model.addFlag(uid, lat, lng, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});
// e.g. localhost:3000/puppile/caregiver/:uid=1&:lat=37.75718&:lng=-122.48653

// Removers
router.get('/remover', (req, res) => {
  const { uid } = req.params;
  model.getFlags(uid, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});
// e.g. localhost:3000/puppile/remover/:uid=1

router.put('/remover', (req, res) => {
  const { flagId } = req.params;
  const { status } = req.query.status; // correct syntax?
  model.updateFlag(uid, flagId, status, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});
// e.g. localhost:3000/puppile/remover/:flagId=1/?status=claimed

module.exports = router;
