// Getting Input Values
const empId = document.querySelector('#id')
const empName = document.querySelector('#name')
const empAge = document.querySelector('#age')
const empGender = document.querySelector('#gender')

// Getting error p elements


function checkId(){
    const value = Number(empId.value);
    
    if(value < 0){

    }

    console.log(typeof value)
}