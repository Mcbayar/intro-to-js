/* password нь 'pass1234' байх бөгөөд буруу хийх 3 удаагийн боломж л байна. 
Зөв байх тохиолдолд 'Access granted!' гэж харагдах бол буруу оруулсан 
тохиолдолд 'Enter your password: ' гэж гарч ирнэ. Харин 3 удаа буруу оруулсан 
тохиолдолд 'Access denied!' гэж харагдана.*/

function checkPassword() {
  const correctPassword = "password1234";

  let attempt = 1;

  while (attempt <= 3) {
    const userInput = prompt("Enter your password: ");

    if (userInput !== correctPassword && attempt === 3) {
      alert("You have reached the maximum number of attempts.");
    } else if (userInput === correctPassword) {
      alert("Access granted");
      break;
    } else {
      attempt = attempt + 1;
    }
  }
}

// 2nd problem

// Hereglegchiin garaas side1, side2, side3 utga avna.
// If gurvaljin mun  uyd  P = side1 + side2 + side3
// gurvaljin bish  uyd  alert("Gurvaljin bish bnaa")

function findPrimeter() {
  const side1 = Number(prompt("Enter side 1: "));
  const side1 = Number(prompt("Enter side 2: "));
  const side1 = Number(prompt("Enter side 3: "));

  const sideOneIsValid = side1 > 0 && side2 + side3 > side1;
  const sideTwoIsValid = Number(side2) > 0 && side1 + side3 > side2;
  const sideThreeIsValid = Number(side3) > 0 && side1 + side2 > side3;

  const isTriangle = sideOneIsValid && sideTwoIsValid && sideThreeIsValid;

  if (isTriangle === true) {
    const priimeter = Number(side1) + Number(side2) + Number(side3);
    alert("Primeter:" + priimeter);
  } else {
    alert("Not a triangle");
  }
}
