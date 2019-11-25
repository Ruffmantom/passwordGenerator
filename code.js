console.log('working');


// Checking for character range is set and between 8-25 charaters resource for adding input resource w3 schools


function generatePass() {
    var charRange = document.getElementById("myNumber").value;
    if (charRange <= 25 && charRange >= 8) {
        console.log('great!');
    } else {
        alert('Please choose a number between 8-25 or leave at 8');
        // trying to reset value inside of enter number area
        // document.getElementById('myNumber').innerHTML(8);
    }
}





// Function for copy to clipboard resource w3 schools
function copyToClipboard() {
    var copyText = document.getElementById("generateBox");
    copyText.select();

    document.execCommand("copy");
    alert(copyText.value);
}






//  need to get functions for finding char sets
// Easy way but more code probably and work..  
var charCodes = {
    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'c', 'w', 'x', 'y', 'z'],
    numCase: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    specialCase: ['!', '@', '#', '$', '%', '^', '&', '*']
};

function getRandom() {

    console.log(charCodes.upperCase + charCodes.lowerCase + charCodes.numCase + charCodes.specialCase);

}

getRandom();


// harder way
// function getUpperCase() {
//     var upperCase = String.fromCharCode(Math.floor(Math.random()));
//     console.log(upperCase);

// }

// getUpperCase();

// function getLowerCase() {

// }
// function getSpecialCase() {

// }
// function getNum() {

// }







