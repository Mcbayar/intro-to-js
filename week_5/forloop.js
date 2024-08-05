/*  Write a function filterBooksByYear that takes in an array of book objects 
 and a year as arguments, and returns a new array containing only the books 
 that were published on or after the given year.
 
 Filter by year 1950

 Output:
 [
 { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
 { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", 
   year: 1967 }  
 ] */

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1967,
  },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

function filterBooksByYear(books, year) {
  let result = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].year > year) {
      result.push(books[i].title);
    }
  }
  console.log(result);
}
filterBooksByYear(books, 1920);

/* Write a function calculateAverageSalary that takes an array of employees
 and a department, and returns the average salary of employees in that 
 department. If no employees are found in the department, return 0.*/

const employees = [
  { id: 1, name: "Alice", department: "Engineering", salary: 75000 },
  { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
  { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
  { id: 4, name: "Dave", department: "HR", salary: 60000 },
  { id: 5, name: "Eve", department: "Marketing", salary: 55000 },
];
function calculteAverageSalary(employee, department_name) {
  let filteredeEmployees = [];
  let totalSalary = 0;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i]) {
    }
  }
}
