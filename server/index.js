const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/blog', (req,res) => {
    const date = new Date().toISOString().split('T')[0]
    const post = 
`---
title: "${req.body.title}"
description: "${req.body.description}"
thumbnail: "${req.body.thumbnail}"
date: "${date}"
---
${req.body.content}
`
    console.log(post)
    fs.writeFileSync(`../src/pages/posts/${req.body.title}.md`, post)
    res.end("SUCESFULLY!")
})

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));