class Library{
    constructor(){
        this.books = []
        this.patrons = []
        this.dailyFine = .1
    }
    addBook(book){
        this.books.push(book)
    }
    addPatron(patron){
        this.patrons.push(patron)
    }
    removePatron(patron){
        this.patrons.pop(patron)
    }
    // chargeFines(patrons,patron){
        // filter(patrons){

        //     // create a filter for patrons array
        //     if (patron.book.dueDate)
        //     // for patrons that have past due books add a fine for every
        //     // day it is past due.
        //     }
        // return patron.balance = patron.balance - this.dailyFine
    // }
}


