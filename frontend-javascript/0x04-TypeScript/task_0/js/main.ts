// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Render the table using Vanilla JavaScript
const body = document.body;
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Create table header
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
header1.textContent = 'First Name';
const header2 = document.createElement('th');
header2.textContent = 'Location';
headerRow.appendChild(header1);
headerRow.appendChild(header2);
thead.appendChild(headerRow);

// Create table rows for each student
studentsList.forEach((student: Student) => {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');
  
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
  
  row.appendChild(cell1);
  row.appendChild(cell2);
  tbody.appendChild(row);
});

// Append elements to the table and body
table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);

// Optional: Add some basic styling
table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
table.style.width = '50%';
table.style.marginTop = '20px';

const cells = table.querySelectorAll('td, th');
cells.forEach((cell) => {
  (cell as HTMLElement).style.border = '1px solid black';
  (cell as HTMLElement).style.padding = '8px';
  (cell as HTMLElement).style.textAlign = 'left';
});