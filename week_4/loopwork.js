let str = "hello";

for (let a = 0; a < str.length; a++) {
  console.log(str[a]);
}

function changeUpperCase(input) {
    let newWord = "";
    for (let i = 0; i < input.length; i++) {
      if (i % 2 == 1) {
        newWord = newWord + input[i].toUpperCase();
      } else {
        newWord = newWord + input[i];
      }
    }
    console.log(newWord);
}
changeUpperCase("hello");
  