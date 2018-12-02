const Book = require('./model.js')
const bookData = require('./book-data.json')


Book.deleteMany({})
    .then(() => {
        Book.collection.insert(bookData)
            .then((books) => {
                console.log(books)
                process.exit()
            })
    })
    .catch((err) => {
        console.log(err)
    })