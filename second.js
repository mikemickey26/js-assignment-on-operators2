//give two examples of a callback function

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log('I am 22 years old');
}


greet('GUYS', callMe);