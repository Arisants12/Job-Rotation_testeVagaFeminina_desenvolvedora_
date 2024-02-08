const readline = require('readline');

function generateFibonacciSequence(limit) {
    let fibonacciSequence = [0, 1];
    while (fibonacciSequence[fibonacciSequence.length - 1] < limit) {
        fibonacciSequence.push(fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]);
    }
    return fibonacciSequence;
}

function isInFibonacciSequence(number, sequence) {
    return sequence.includes(number);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter a number to check if it belongs to the Fibonacci sequence: ", function(answer) {
    const targetNumber = Number(answer);
    const fibonacciSequence = generateFibonacciSequence(targetNumber);
    const belongsToFibonacci = isInFibonacciSequence(targetNumber, fibonacciSequence);

    const result = {
        target_number: targetNumber,
        fibonacci_sequence: fibonacciSequence,
        belongs_to_fibonacci_sequence: belongsToFibonacci
    };

    console.log(JSON.stringify(result, null, 4));
    rl.close();
});
