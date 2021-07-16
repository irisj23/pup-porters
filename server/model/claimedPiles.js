const database = require('../../database');

let claimPile = (pile) => {
    console.log("Claiming pile");
    console.log(pile);

    await database.beginTransaction();

    const pileId = "";

    try {
        const selectAvailableSql = `SELECT * FROM available_piles WHERE id == "${pileId}"`;
        await database.query(selectAvailableSql);
        database.commit();
    } catch (error) {
        console.log("Error claiming pile")
        console.log(error);
    }
}

module.exports = {
  claimPile: claimPile
};