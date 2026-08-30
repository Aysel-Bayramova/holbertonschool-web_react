interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Aysel",
  lastName: "Bayramova",
  age: 20,
  location: "Sumqayit"
};

const student2: Student = {
  firstName: "Ali",
  lastName: "Aliyev",
  age: 22,
  location: "Baku"
};

const studentsList: Array<Student> = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const table: HTMLTableElement = document.createElement('table');
  const tbody: HTMLTableSectionElement = document.createElement('tbody');

  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    const cellFirstName: HTMLTableCellElement = document.createElement('td');
    const cellLocation: HTMLTableCellElement = document.createElement('td');

    cellFirstName.textContent = student.firstName;
    cellLocation.textContent = student.location;

    row.appendChild(cellFirstName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
});
