const database = require('../../database');

let claimPile = async (pile) => {
    console.log("Claiming pile");
    console.log(pile);

    await database.beginTransaction();

    const pileId = "23";

    try {
        const selectAvailableSql = `SELECT * FROM available_piles WHERE id="${pileId}"`;
        console.log(selectAvailableSql);
        await database.query(selectAvailableSql);
        console.log(deleteAvailableSql);
        const deleteAvailableSql = `DELETE * FROM available_piles WHERE id="${pileId}"`;
        await database.query(deleteAvailableSql);
        const insertClaimedSql = `INSERT INTO claimed_piles (id, coords, remover_id) VALUES ()`;
        await database.query(insertClaimedSql);
        database.commit();
    } catch (error) {
        console.log("Error claiming pile")
        console.log(error);
        database.rollback();
    }
}

module.exports = {
  claimPile: claimPile
};