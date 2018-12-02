const mongoose = require('./connection.js')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    bookSummary: String,
})


const Book = mongoose.model('Book', BookSchema)

module.exports = Book;
