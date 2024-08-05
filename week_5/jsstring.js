// Given a string change the every even letter to an uppercase.
// input: hello
// output: hElLo

function homework1(word) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (i % 2 == 1) {
      newWord = newWord + word[i].toUpperCase();
    } else {
      newWord = newWord + word[i];
    }
  }
  console.log(newWord);
}
homework1("hello");

// if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

function checkletter(checkword) {
  let result = "no";
  for (let a = 0; a < checkword.length; a++) {
    if (checkword[a] == "y") {
      result = "yes";
    }
  }
  console.log(result);
}
checkletter("Any");

// Print the characters of the string, separated by space, and in capital letters,
// input: John
// output: J O H N

function addspace(addspace) {
  let newWord1 = "";
  for (let b = 0; b < addspace.length; b++) {
    newWord1 = newWord1 + addspace[b].toUpperCase() + " ";
  }
  console.log(newWord1);
}
addspace("John");

// Write function that find longer word. It takes 2 arguments (word1, word2) and return the longer word

function findlonger(word1, word2) {
    if (word1.length > word2.length) {
        console.log("The word: " + word1 +  " is longer.");
    }else if (word2.length > word1.length) {
        console.log("The word: " + word2 + " is longer.");
    }else{
        console.log("Both words have the same number of letters.");
    }
}
findlonger("England", "land" )

// Create a while loop that runs from 1-100
// Every 10 loops, print out: Checkpoint! and the loop number
// On loop 50 print out ONLY: Half way there!
// On the final loop (100) print out ONLY: You made it!
// AFTER the loop is done, print out: All, done!

function printevery10(d, c) {
    let f = d;
    while (f < c) {
        if (f == c / 2) {
            console.log(f + " halfway there!");
        }else if (f % 10 == 0) {
            console.log("Checkpoint! " + f);
        }
        f++;
    }
    console.log(f + " You made it! All done");
}
printevery10(10, 100);

// 
