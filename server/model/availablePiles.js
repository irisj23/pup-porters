const database = require('../../database');

let availablePile = async () => {
    console.log('available pile')

    try {
      let res = await database.query(`SELECT * FROM available_piles`);
      return res.data;

    } catch (error) {
      console.log("Error with available pile")
      console.log(error);
    }
  };

  //{JSON.stringify(currentUser.uid)}

module.exports = {
  availablePile: availablePile
};