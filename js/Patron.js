class Patron{
    constructor(name,email,currentBook){
        this.name = name
        this.email = email
        this.currentBook = []
        this.balance = 0
    }
    checkout(book){
        this.currentBook.push(book)
        library.books.pop(book)
        book.out = true
        book.patron = this
        
    }
    returnBook(book){
        this.currentBook.pop(book)
        library.books.push(book)
        book.out = false
        book.dueDate = null
    }
}

