const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const port = 3001;

app.use(cors());

// Interface for existing posts
app.get('/api/posts', (req, res) => {
    fs.readFile('posts.json', 'utf8', (err, data) => {
        if(err) {
            console.error('Error while reading file', err);
            return res.status(500).json({ error: 'Internal server error' })
        }
        res.json(JSON.parse(data));
    })
})

// Post-Interface for creating new posts
app.post('/api/createPost', (req, res) => {
    console.log('POST-Request accepted lol.')
})



app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})