//explore number
var num1, num2, num3;

//create function random number
function getRandomNumber() {
    num1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById('num1').innerHTML = num1
    num2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById('num2').innerHTML = num2
    num3 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    document.getElementById('num3').innerHTML = num3

    //Do inner Html 
    var sum = num1 + num2 + num3;
    if (sum > 10) {
        document.getElementById('goal').innerHTML = 'Tai';
    } else {
        document.getElementById('goal').innerHTML = 'Xiu';
    }
}


