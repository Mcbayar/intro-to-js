// For Loop 

// Task 1

for (let i = 1; i <= 10; i = i + 1) {
    console.log(i)
}

// Task 2

for (let a = 0; a <= 20; a = a + 2) {
    console.log(a)
}

// Task 3

for (let b = 3; b <= 27; b = b + 3) {
    console.log(b)
}

// Task 4

for (let c = 10; c >= 1; c = c - 1) {
    console.log(c)
}

// Task 5

let name = "Bold"

for (let d = 0; d < name.length; d ++) {
    console.log(name[d])
}

// spellLetters ("Joe")

    function spellLetters (name) {
for (let f = 0; f < name.length; f ++) {
    console.log(name [f])
        }
    }

// Task 6. Write a function that finds factorial

function factorial(num) {
    let result = num;
    if (num == 0 || num == 1) console.log(1);
    while (num > 1) {
        num--;
        result *= num;
    }
    console.log("Factorial of your number is" + result);
}
factorial(5);





