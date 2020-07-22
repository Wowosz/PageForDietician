const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.post('/blog', (req,res) => {
    console.log(req.body)
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));