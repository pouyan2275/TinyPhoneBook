const express = require('express');
const api = require("./api/crud")


const app = express();


app.use(express.json());
app.use('/api',api)


const port: Number = 3000
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})