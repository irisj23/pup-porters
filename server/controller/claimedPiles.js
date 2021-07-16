const express = require('express');
const model = require('../model/claimedPiles.js');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log("Handling claim pile post");
    const claim = req.body;
    console.log(claim);
    try {
        const result = await model.claimPile(claim);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});


// router.delete('/)

module.exports = router;