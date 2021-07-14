const express = require('express');
const path = require('path');

<<<<<<< HEAD
const app = express();
const PORT = 3000;
=======
const app = express()
const PORT = 300;
>>>>>>> 7bb05aa821b6a654583ffb1488211022a869974f

const filePath = path.join(__dirname, '../client/dist');
const serveStatic = express.static(filePath);

app.use(serveStatic);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
