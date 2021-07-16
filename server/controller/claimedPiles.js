const express = require('express');
const model = require('../model/claimedPiles.js');
const router = express.Router();

router.post('/', async (req, res) => {
    console.log("Handling claim pile post");
    try {
        const result = await model.claimPile({});
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;