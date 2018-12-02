const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const Book = require('./db/model.js')

const app = express()

app.set('port', process.env.PORT || 3007)
app.use(parser.json())
app.use(cors())

app.use(express.static('client/build'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

app.get('/api/books', (req, res) => {
    Book.find()
        .then((books) => {
            res.json(books)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.listen(3007, () => {
})