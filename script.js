// Function to convert Celsius to Fahrenheit
function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        document.getElementById('temperatureResult').innerText = 'Please enter a valid number.';
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('temperatureResult').innerText = `${celsius} °C = ${fahrenheit.toFixed(2)} °F`;
}

// Function to convert Kilograms to Pounds
function convertWeight() {
    const kilograms = parseFloat(document.getElementById('kilograms').value);
    if (isNaN(kilograms)) {
        document.getElementById('weightResult').innerText = 'Please enter a valid number.';
        return;
    }
    const pounds = kilograms * 2.20462;
    document.getElementById('weightResult').innerText = `${kilograms} kg = ${pounds.toFixed(2)} lbs`;
}

// Function to convert Kilometers to Miles
function convertDistance() {
    const kilometers = parseFloat(document.getElementById('kilometers').value);
    if (isNaN(kilometers)) {
        document.getElementById('distanceResult').innerText = 'Please enter a valid number.';
        return;
    }
    const miles = kilometers * 0.621371;
    document.getElementById('distanceResult').innerText = `${kilometers} km = ${miles.toFixed(2)} miles`;
}

// Function to calculate GCD
function calculateGCD() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('gcdResult').innerText = 'Please enter valid numbers.';
        return;
    }
    const gcd = findGCD(num1, num2);
    document.getElementById('gcdResult').innerText = `GCD of ${num1} and ${num2} is ${gcd}.`;
}

function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Function to calculate LCM
function calculateLCM() {
    const num1 = parseInt(document.getElementById('lcmNum1').value);
    const num2 = parseInt(document.getElementById('lcmNum2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('lcmResult').innerText = 'Please enter valid numbers.';
        return;
    }
    const lcm = (num1 * num2) / findGCD(num1, num2);
    document.getElementById('lcmResult').innerText = `LCM of ${num1} and ${num2} is ${lcm}.`;
}

// Function to calculate Modulo
function calculateModulo() {
    const num1 = parseInt(document.getElementById('modNum1').value);
    const num2 = parseInt(document.getElementById('modNum2').value);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('modResult').innerText = 'Please enter valid numbers.';
        return;
    }
    const modulo = num1 % num2;
    document.getElementById('modResult').innerText = `${num1} % ${num2} = ${modulo}`;
}
