console.log('working');


// Checking for character range is set and between 8-25 charaters resource for adding input resource w3 schools
var result = document.getElementById('generateBox')

function generatePass() {
    let userNum = document.getElementById("myNumber").value;
    if (userNum <= 25 && userNum >= 8) {
        console.log('great!');
    } else {
        alert('Please choose a number between 8-25');
    };
    // Rusults box
    const length = userNum;
    console.log(length);

    // adding the results for the password
    result.innerHTML = generatedPassword(length);

};


// final GENERATION function 
function generatedPassword(length) {

    var typesArr = [true, true, true, true];
    let password = '';
    var typeCount = typesArr;

    for (i = 0; i <= length; i++) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            password += funcHolder[funcName]();

        })

    }

}

// setting types to all true since user cannot uncheck a char type
var typesArr = [true, true, true, true];

// Added a object to hold all the functions
var funcHolder = {
    lower: getLowerCase,
    upper: getUpperCase,
    special: getSpecialCase,
    numbers: getNum
}

// got functions to get random numbers and letters help from youtube resource "Traversy Media"
function getLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

function getUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getSpecialCase() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

function getNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


// Function for COPY to clipboard resource w3 schools
function copyToClipboard() {
    var copyText = document.getElementById("generateBox");
    copyText.select();

    document.execCommand("copy");
    alert(copyText.value);
}












