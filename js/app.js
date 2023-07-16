function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStiring = pin + '';
    if (pinStiring.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit calling again', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const clacInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'c') {
            clacInput.value = '';
        }
    }
    else {
        const previousNumber = clacInput.value;
        const newNumber = previousNumber + number;
        clacInput.value = newNumber;
    }
})
function varifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const success = document.getElementById('notify-success')
    const failEroor = document.getElementById('notify-fail')
    if (pin == typedNumbers) {
        success.style.display = 'block';
        failEroor.style.display = 'none';

    }
    else {
        success.style.display = 'none';
        failEroor.style.display = 'block';
    }
}