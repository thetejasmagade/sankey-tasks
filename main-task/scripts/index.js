// Main Array of Objects
let employees = [];

// deleted ID's Entry
let deletedIds = [];



// Show heading when list is empty
if (tbody.childElementCount == 0) {
    let newH3 = document.createElement('h3');
    newH3.textContent = "Employee List is Empty ⛔";
    newH3.className = 'empty-list-heading';
    tableDiv.append(newH3);
}

// Function to handle Empty List Heading
function emptyListHeadingFn() {
    let emptyListHeading = document.querySelector('.empty-list-heading');
    if (emptyListHeading)
        emptyListHeading.remove();
}


// Sort the arrays and modify showModal(i) value according to it
function sortArray(val) {
    if (val == 'inc') {
        employees.sort((a, b) => a.id - b.id);

        for (var i = 0; i < employees.length; i++) {
            employees[i].index = i;
        }
    }
    else {
        employees.sort((a, b) => b.id - a.id);

        for (var i = 0; i < employees.length; i++) {
            employees[i].index = i;
        }
    }
}

// Sort the table and show on the page
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
        <td><button onclick="showModal(${employees[employee].index})" class="edit-btn">EDIT</button><button onclick="deleteData(${employees[employee].index})" class="delete-btn">DELETE</button></td>
    `

        tbody.append(newTrElement);
    }
}

// Function to show and assign values to modal
function showModal(val) {
    modal.style.display = 'block';
    showDisabledModal = false;

    // const thatTr = document.querySelector('#tr-' + val)

    empIdModal.value = employees[val].id;
    empNameModal.value = employees[val].name;
    empAgeModal.value = employees[val].age;
    empGenderModal.value = employees[val].gender;
    arrNoModal.value = val


    isAllDataFilled('modal')
}

// Function to close modal and assign default values
function closeModal() {
    modal.style.display = 'none';

    empIdModal.value = "";
    empNameModal.value = "";
    empAgeModal.value = "";
    empGenderModal.value = "";
    arrNoModal.value = "";
}

// Reset Form Functionality for normal form
function resetForm() {
    empId.value = "";
    empName.value = "";
    empAge.value = "";
    empGender.value = "Select Gender";

    errorId.textContent = "";
    errorName.textContent = "";
    errorAge.textContent = "";
    errorGender.textContent = "";

    showDisabled = true;
    isAllDataFilled();
}


// Reset Form Functionality for Modal form
function resetFormModal() {
    empIdModal.value = "";
    empNameModal.value = "";
    empAgeModal.value = "";
    empGenderModal.value = "Select Gender";

    errorIdModal.textContent = "";
    errorNameModal.textContent = "";
    errorAgeModal.textContent = "";
    errorGenderModal.textContent = "";

    showDisabledModal = true;
    isAllDataFilled('modal');
}


// Function to add new employees
function addData() {
    employees.push({
        id: Number(empId.value),
        name: empName.value,
        age: Number(empAge.value),
        gender: empGender.value,
        index: employees.length - 1
    })

    emptyListHeadingFn();

    const newTrElement = document.createElement('tr');
    newTrElement.id = 'tr-' + employees.length;
    newTrElement.innerHTML = `
        <td>${empId.value}</td>
        <td>${empName.value}</td>
        <td>${empAge.value}</td>
        <td>${empGender.value}</td>
        <td><button onclick="showModal(${employees.length - 1})" class="
        edit-btn">EDIT</button><button onclick="deleteData(${employees.length - 1})" class="delete-btn">DELETE</button></td>
        
    `
    tbody.append(newTrElement);

    empId.value = '';
    empName.value = '';
    empAge.value = '';
    empGender.value = 'Select Gender';

    showDisabled = true;
    isAllDataFilled();

    showDisabledSortSelect = false;
    showDisabledSort();


    // To fix bug when new data is added in dark mode
    if (document.body.classList.contains('dark-theme')) {
        sortSelect.style.color = "white";
    } else {
        sortSelect.style.color = "black";
    }
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


function deleteData(val) {
    deletedIds.push(employees[val].id)

    let newArray = employees.filter((employee) => {
        return employees.indexOf(employee) != val
    })

    employees = [...newArray]

    sortTable();

    if (tbody.childElementCount == 0) {
        let newH3 = document.createElement('h3');
        newH3.textContent = "Employee List is Empty ⛔";
        newH3.className = 'empty-list-heading';
        tableDiv.append(newH3);
    }
}

// function to handle theme
function changeTheme() {
    let body = document.body;
    let labels = document.querySelectorAll('.label');
    let inputs = document.querySelectorAll('.input');

    if (themeBtn.value === '☀️') {
        body.classList.toggle('dark-theme');
        themeBtn.value = '🌓';
        themeBtn.style.backgroundColor = 'white';
        modalContent.style.backgroundColor = "white";
        sortSelect.style.backgroundColor = "white";
        sortSelect.style.color = "black";
        searchInput.style.backgroundColor = "white";
        searchInput.style.color = "black";
        searchResBox.style.backgroundColor = "lightgray";
        searchResBox.style.color = "black";


        for (let label of labels) label.style.color = "#4F626F"
        for (let input of inputs) {
            input.style.backgroundColor = "white"
            input.style.color = "black";
        }
    } else {
        body.classList.toggle('dark-theme');
        themeBtn.value = '☀️';
        themeBtn.style.backgroundColor = 'black'
        modalContent.style.backgroundColor = "black";
        sortSelect.style.backgroundColor = "#2F2F2F";
        sortSelect.style.color = "white";
        searchInput.style.backgroundColor = "#2F2F2F";
        searchInput.style.color = "white";
        searchResBox.style.backgroundColor = "#2F2F2F";
        searchResBox.style.color = "white";

        for (let label of labels) label.style.color = "lightgray";
        for (let input of inputs) {
            input.style.backgroundColor = "#2F2F2F";
            input.style.color = "white";
        }
    }
}


// Function to handle search
function search() {
    searchResBox.innerHTML = null
    let newUl = document.createElement('ul');

    if (searchInput.value) {
        let results = employees.filter((employee) => {
            return employee.name.toLowerCase().includes(searchInput.value.toLowerCase())
        })

        if (results.length > 0) {
            for (let result of results) {
                let index = employees.indexOf(result)
                let newLi = document.createElement('li');
                newLi.innerHTML = `
                    <span class="search-result" onclick="showModal(${index})">${result.name}</span>
                `
                newUl.append(newLi)
            }
        } else {
            let newLi = document.createElement('li');
            newLi.innerHTML = `Employee Not Found`
            newUl.append(newLi)
        }

        searchResBox.append(newUl)
    }
}
