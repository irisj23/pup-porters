const express = require('express')
const path = require('path')

const app = express()
const PORT = 300;

const filePath = path.join(__dirname, '../client/dist');
const serveStatic = express.static(filePath);

app.use(serveStatic)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})