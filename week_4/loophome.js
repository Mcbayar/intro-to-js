// Task: Write a for loop that prints the odd numbers from 1 to 10,
// inclusive. Each number should be printed on a new line.

let i = 1;

while (i <= 10) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i = i + 1;
}

// Odd numbers sum 1 to 100

function sumofOddNumbers(a, b) {
let f = a;
let total = 0;
while (f <= 100) {
  if (f % 2 == 1) {
    total = total + f;
  }
  f++;
} 
console.log(total);  
}
sumofOddNumbers(1, 10);


// check point

let k = 10;
while (k <= 100) {
  console.log(k);
  k = k + 10;
}
// Every 10 loops, print out: Checkpoint! and the loop number
// On loop 50 print out ONLY: Half way there!
// On the final loop (100) print out ONLY: You made it!
// AFTER the loop is done, print out: All, done!

let p = 10;
while (p <= 100) {
  console.log(p);
  if (p === 50) {
    console.log("half way there");
  } else if (p === 100) {
    console.log("you made it");
  } else {
    console.log("checkpoint" + p);
  }
  p = p + 10;
}

