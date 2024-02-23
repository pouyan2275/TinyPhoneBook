const express = require('express');
const api = require("./api/crud")
const cors = require('cors')

const app = express();
app.use(cors())
app.use((req:any, res:any, next:any) => {
    console.log(`Time: ${Date()}; url: ${req.url} method: ${req.method}`)
    next()
  })

app.use(express.json());
app.use('/api',api)


const port: Number = 3001
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})