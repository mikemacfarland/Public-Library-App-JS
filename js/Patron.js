//-------------------------
// Variables
//-------------------------

const employeesAPI = `https://randomuser.me/api/?results=6&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`
const studentsAPI = `https://randomuser.me/api/?results=30&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`
const booksAPI = ''

const books = []
const booksHTML = []
const students = []
const studentHTML = []
const employees = []
const employeeHTML = []

let cardHTML = document.querySelector('#cardSection')



//-------------------------
// Fetch Data
//-------------------------

getData(employeesAPI,employees,generateEmployees)

//-------------------------
// Event Listeners
//-------------------------

document.addEventListener('click', (e) =>{
    signIn = document.querySelector('#signIn')
    if(e.target = signIn) signIn()
})

//-------------------------
// Functions
//-------------------------
function getData(url,variable,func){
    fetch(url)
    .then(response => response.json())
    .then(data => data.results.forEach(data => variable.push(data)))
    .then(func)
    .catch(err => console.log(err.message))
}

function generateEmployees(){
    employees.forEach(employee => employeeHTML.push(
        `<div class="employeeCard flexColumn">
        <img class="thumbnail" src="${employee.picture.large}">
            <div class="cardData flexColumn">
                <h3 id='employeeName'>${employee.name.first} ${employee.name.last}</h3>
                <div class="flexColumn">
                    <button id="signIn">Sign In</button>
                </div>
            </div>
        </div>`
    ))
    cardHTML.innerHTML = employeeHTML.join("")
    console.log(employeeHTML) 
}
function generateEmployeeID(){
}
function generateStudentID(){
}
function generateStudents(students){
}
function generateBooks(books){
}
function employeeSignIn() {

}























// class Patron{
//     constructor(name,email,currentBook){
//         this.name = name
//         this.email = email
//         this.currentBook = []
//         this.balance = 0
//     }
//     checkout(book){
//         this.currentBook.push(book)
//         library.books.pop(book)
//         book.out = true
//         book.patron = this
        
//     }
//     returnBook(book){
//         this.currentBook.pop(book)
//         library.books.push(book)
//         book.out = false
//         book.dueDate = null
//     }
// }

