const form = document.getElementById('contact-form');
const fullName = document.getElementById('full-name');
const phoneNumber = document.getElementById('phone-number');
const namesList = [];
const numberList = [];
const removeButtonArray = [];
let cont = 0;
let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (fullNameValidation(fullName.value)) {
        newLine();
    }

    clearFields();
})

fullName.addEventListener('keyup', function(e) {
    const fullNameError = document.getElementById('fullname-error');

    if (!fullNameValidation(e.target.value)) {
        fullNameError.className = '';
        fullNameError.innerHTML = 'You need to insert the full name!';
        fullNameError.classList.add('fullname-error-disapproved');
    } else {
        fullNameError.className = '';
        fullNameError.innerHTML = 'Nice! Now this one is a full name!';
        fullNameError.classList.add('fullname-error-approved');
    }

    fullName.addEventListener('focusout', function() {
        if (fullNameValidation(e.target.value)) {
            fullNameError.innerHTML = '';
    }})
})

function newLine() {
    
    if (namesList.includes(fullName.value)) {
        alert('This contact already exist');
    } else {
        namesList.push(fullName.value);
        numberList.push(numberList);
        removeButtonArray.push(cont);
        cont++

        let line = '<tr>';
        line += `<td>${fullName.value}</td>`;
        line += `<td>${formatPhoneNumber(phoneNumber.value)}</td>`;
        line += '</tr>';

        lines += line;

        clearFields();
        addEntry(lines);
    }    
}

function clearFields() {
    fullName.innerHTML = '';
    phoneNumber.innerHTML = '';
}

function addEntry(line) {
    const table = document.querySelector('tbody');
    return table.innerHTML = line;
}

function fullNameValidation(fullName) {
    let check = fullName.split(' ');
    return check.length >= 2;
}

function formatPhoneNumber(number) {
    let numberArray = number.match(/(\d{2})(\d{5})(\d{4})/);
    return '(' + numberArray[1] + ') ' + numberArray[2] + '-' + numberArray[3];
    
}