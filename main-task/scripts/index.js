// Main Array of Objects
let employees = [];

// Updated ID's Entry
let updatedIds = [];


// Show heading when list is empty
if (tbody.childElementCount == 0) {
    let newH3 = document.createElement('h3');
    newH3.textContent = "Employee List is Empty";
    newH3.className = 'empty-list';
    tbody.append(newH3);
}

// Function to handle Empty List Heading
function emptyListHeadingFn() {
    let emptyListHeading = document.querySelector('.empty-list');
    if (emptyListHeading)
        emptyListHeading.remove();
}



function sortArray(val) {
    if (val == 'inc') {
        employees.sort((a, b) => a.id - b.id);

        for (var i = employees.length - 1; i >= 0; i--) {
            employees[i].actions = `<button onclick="showModal(${i})">EDIT</button><button>DELETE</button>`
        }
    }
    else {
        employees.sort((a, b) => b.id - a.id);

        for (var i = 0; i < employees.length; i++) {
            employees[i].actions = `<button onclick="showModal(${i})">EDIT</button><button>DELETE</button>`;
        }
    }
}


function sortTable() {
    var childTr = tbody.lastElementChild;
    while (childTr) {
        tbody.removeChild(childTr);
        childTr = tbody.lastElementChild;
    }

    sortArray(sortSelect.value);

    for (var employee = 0; employee < employees.length; employee++) {
        const newTrElement = document.createElement('tr');
        newTrElement.id = 'tr-' + employees.length;

        newTrElement.innerHTML = `
        <td>${employees[employee].id}</td>
        <td>${employees[employee].name}</td>
        <td>${employees[employee].age}</td>
        <td>${employees[employee].gender}</td>
        <td>${employees[employee].actions}</td>
    `

        tbody.append(newTrElement);
    }
}

// Function to show and assign values to modal
function showModal(val) {
    modal.style.display = 'block';
    showDisabledModal = false;

    const thatTr = document.querySelector('#tr-' + val)

    empIdModal.value = employees[val].id;
    empNameModal.value = employees[val].name;
    empAgeModal.value = employees[val].age;
    empGenderModal.value = employees[val].gender;
    arrNoModal.value = val

    console.log(thatTr)
    isAllDataFilled('modal')
}

// Function to close modal and assign default values
function closeModal() {
    modal.style.display = 'none';

    empIdModal.value = ""
    empNameModal.value = ""
    empAgeModal.value = ""
    empGenderModal.value = ""
    arrNoModal.value = ""
}


// Function to add new employees
function addData() {
    employees.push({
        id: Number(empId.value),
        name: empName.value,
        age: Number(empAge.value),
        gender: empGender.value,
        actions: `<button onclick="showModal(${employees.length-1})">EDIT</button><button>DELETE</button>`
    })

    emptyListHeadingFn();

    const newTrElement = document.createElement('tr');
    newTrElement.id = 'tr-' + employees.length;
    newTrElement.innerHTML = `
        <td>${empId.value}</td>
        <td>${empName.value}</td>
        <td>${empAge.value}</td>
        <td>${empGender.value}</td>
        <td><button onclick="showModal(${employees.length-1})">EDIT</button><button>DELETE</button></td>
        
    `
    tbody.append(newTrElement);

    empId.value = '';
    empName.value = '';
    empAge.value = '';
    empGender.value = '';

    showDisabled = true;
    isAllDataFilled();

    showDisabledSortSelect = false;
    showDisabledSort();

}


// Function to Edit the data
function editData() {
    modal.style.display = 'none';

    employees[arrNoModal.value].id = empIdModal.value;
    employees[arrNoModal.value].name = empNameModal.value;
    employees[arrNoModal.value].age = empAgeModal.value;
    employees[arrNoModal.value].gender = empGenderModal.value;

    
    sortTable();
}

