let showDisabled = true;
let showDisabledSortSelect = true;

let showDisabledModal = true;

function isAllDataFilled(val) {
    if (val) {
        if (!showDisabledModal) {
            addButtonModal.removeAttribute('disabled');
            addButtonModal.style.cursor = 'pointer';
            addButtonModal.style.backgroundColor = 'darkgreen';
        } else {
            addButtonModal.setAttribute('disabled', 'disabled');
            addButtonModal.style.cursor = 'not-allowed';
            addButtonModal.style.backgroundColor = 'lightgreen';
        }
    } else {
        if (!showDisabled) {
            addButton.removeAttribute('disabled');
            addButton.style.cursor = 'pointer';
            addButton.style.backgroundColor = 'darkgreen';
        } else {
            addButton.setAttribute('disabled', 'disabled');
            addButton.style.cursor = 'not-allowed';
            addButton.style.backgroundColor = 'lightgreen';
        }
    }
}


function checkEverything(val){
    let temp = false
    
    if(val){
        if(((empIdModal.value && empNameModal.value && empAgeModal.value && empGenderModal.value) && (!errorIdModal.textContent && !errorNameModal.textContent && !errorAgeModal.textContent && !errorGenderModal.textContent)))
            temp = true;
    } else {
        if (((empId.value && empName.value && empAge.value && empGender.value) && (!errorId.textContent && !errorName.textContent && !errorAge.textContent && !errorGender.textContent)))
            temp = true;
    }
    return temp;
}


function showDisabledSort() {
    if (!showDisabledSortSelect) {
        sortSelect.removeAttribute('disabled');
        sortSelect.style.color = 'black';
        sortSelect.style.cursor = 'pointer';
    } else {
        sortSelect.setAttribute('disabled', 'disabled');
        sortSelect.style.color = 'gray'
        sortSelect.style.cursor = 'not-allowed';
    }
}

function checkId(val) {
    let empIdValModal = Number(empIdModal.value)
    let empIdVal = Number(empId.value)

    let isAlreadyInDeleted = deletedIds.find(id => id == empIdVal) ? true : false;
    let isAlreadyInUsed = employees.find(employee => employee.id == empIdVal) ? true : false;

    console.log(isAlreadyInDeleted);

    if (val == 'modal') {
        if (empIdValModal < 0) {
            errorIdModal.textContent = "Employee ID should be greater than zero.";
            showDisabledModal = true;
        } else if (!empIdValModal) {
            errorIdModal.textContent = "Employee ID should Not Empty.";
            showDisabledModal = true;
        } else {
            errorIdModal.textContent = "";
            checkEverything('modal') ? showDisabledModal = false : showDisabledModal = true;
        }
        isAllDataFilled('modal')
    } else {
        if (empIdVal < 0) {
            errorId.textContent = "Employee ID should be greater than zero.";
            showDisabled = true;
        } else if (!empIdVal) {
            errorId.textContent = "Employee ID should Not Empty.";
            showDisabled = true;
        } else if (isAlreadyInDeleted) {
            errorId.textContent = "Employee ID already used and Deleted.";
            showDisabled = true;
        } else if (isAlreadyInUsed) {
            errorId.textContent = "Employee ID already Assigned for Another Employee.";
            showDisabled = true;
        } else {
            errorId.textContent = "";
            checkEverything() ? showDisabled = false : showDisabled = true;
        }
        isAllDataFilled();
    }
}

function checkName(val) {
    let empNameValModal = empNameModal.value;
    let empNameVal = empName.value;

    if (val) {
        if (!empNameValModal) {
            errorNameModal.textContent = "";
            showDisabledModal = true;
        } else if (!empNameValModal.match(/^[A-Z]/)) {
            errorNameModal.textContent = "Employee Name should Start with Capital Letter";
            showDisabledModal = true;
        } else if (empNameValModal.match(/[0-9]/g)) {
            errorNameModal.textContent = "Employee Name should not contain Numbers.";
            showDisabledModal = true;
        } else if (!empNameValModal.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
            errorNameModal.textContent = "Employee Name should have one Space.";
            showDisabledModal = true;
        } else {
            errorNameModal.textContent = "";
            checkEverything('modal') ? showDisabledModal = false : showDisabledModal = true;
        }
        isAllDataFilled('modal');
    }
    else {
        if (!empNameVal) {
            errorName.textContent = "";
            showDisabled = true;
        } else if (!empNameVal.match(/^[A-Z]/)) {
            errorName.textContent = "Employee Name should Start with Capital Letter";
            showDisabled = true;
        } else if (empNameVal.match(/[0-9]/g)) {
            errorName.textContent = "Employee Name should not contain Numbers.";
            showDisabled = true;
        } else if (!empNameVal.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
            errorName.textContent = "Employee Name should have one Space.";
            showDisabled = true;
        } else {
            errorName.textContent = "";
            checkEverything() ? showDisabled = false : showDisabled = true;
        }
        isAllDataFilled();
    }
}

function checkAge(val) {
    let empAgeVal = Number(empAge.value);
    let empAgeValModal = Number(empAgeModal.value);

    if (val) {
        if (!empAgeValModal) {
            errorAgeModal.textContent = "Employee Age should Not Empty";
            showDisabledModal = true;
        } else if (empAgeValModal < 18 || empAgeValModal > 65) {
            errorAgeModal.textContent = "Employee Age should be in between 18 and 65.";
            showDisabledModal = true;
        } else {
            errorAgeModal.textContent = "";
            checkEverything('modal') ? showDisabledModal = false : showDisabledModal = true;
        }

        isAllDataFilled('modal');
    } else {
        if (!empAgeVal) {
            errorAge.textContent = "Employee Age should Not Empty";
            showDisabled = true;
        } else if (empAgeVal < 18 || empAgeVal > 65) {
            errorAge.textContent = "Employee Age should be in between 18 and 65.";
            showDisabled = true;
        } else {
            errorAge.textContent = "";
            checkEverything() ? showDisabled = false : showDisabled = true;
        }
        isAllDataFilled();
    }
}


function checkGender(val) {
    let empGenderVal = empGender.value;
    let empGenderValModal = empGenderModal.value;

    if (val) {
        if (empGenderValModal == "Select Gender") {
            errorGenderModal.textContent = "Gender should be Valid like Male, Female or Others.";
            showDisabledModal = true;
        } else {
            errorGenderModal.textContent = "";
            checkEverything('modal') ? showDisabledModal = false : showDisabledModal = true;
        }
        isAllDataFilled('modal');
    } else {
        if (empGenderVal == "Select Gender") {
            errorGender.textContent = "Gender should be Valid like Male, Female or Others.";
            showDisabled = true;
        } else {
            errorGender.textContent = "";
            checkEverything() ? showDisabled = false : showDisabled = true;
        }
        isAllDataFilled();
    }
}

isAllDataFilled();
isAllDataFilled('modal');
showDisabledSort();