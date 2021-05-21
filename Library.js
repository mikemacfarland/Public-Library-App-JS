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

    // theres still an issue when a book gets removed form patrons book list and
    //  charge fines is ran again.

    // also fines get charged positive when book isnt overdue
    
    chargeFines(){
        if (this.patrons.currentbook !== []){
        let patrons = library.patrons
            for (let i = 0; i < patrons.length; i++){
                patrons[i].balance = 0
                for (let j = 0; j < patrons[i].currentBook.length; j++){
                    let patronsBookDueDate = patrons[i].currentBook[j].dueDate
                    let today = new Date()
                    let timeLate = today - patronsBookDueDate
                    let daysLate = (timeLate/8.64e+7)
                    let fine = 0 - (this.dailyFine * daysLate)
                    patrons[i].balance += fine
                }
            }
        }
        else{
            return
        }
    
    }
}
