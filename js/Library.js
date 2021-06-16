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

// from html

<script defer>
  // our test code here
  const library = new Library()
  

  const book1 = new Book("Ass Goblins of Auschwitz","Cameron Pierce","1933929936","08-05-09")
  const book2 = new Book("The Baby Jesus Butt Plug","Carleton Mellic III","0972959823","01-23-04")
  const book3 = new Book("I Knocked Up Satan's Daughter","Carleton Mellic III","1936383829","09-06-11")

  const patron1 = new Patron("Dale","440rupp69@hotmail.com")
  const patron2 = new Patron("Jeff","mrpenis@hotmail.com")
  
  library.addPatron(patron1)
  library.addPatron(patron2)

  library.addBook(book1)
  library.addBook(book2)
  library.addBook(book3)

  patron1.checkout(book1)
  patron1.checkout(book2)
  patron2.checkout(book2)
  library.chargeFines()
  // console.log(patron1)

  
  
  
</script>