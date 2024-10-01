
let users = [];

let form = document.getElementById('userForm');
let tableBody = document.getElementById('userTableBody');


form.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop the page from refreshing

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    addUserToArray(name, age);
    displayUsers();
    form.reset();
});

function addUserToArray(name, age) {
    users.push({ name: name, age: age });
}


function displayUsers() {

    tableBody.innerHTML = '';

    for (let user of users) {

        let row = document.createElement('tr');
        let nameCell = document.createElement('td');
        let ageCell = document.createElement('td');


        nameCell.textContent = user.name;
        ageCell.textContent = user.age;

        row.appendChild(nameCell);
        row.appendChild(ageCell);

        tableBody.appendChild(row);
    }
}
