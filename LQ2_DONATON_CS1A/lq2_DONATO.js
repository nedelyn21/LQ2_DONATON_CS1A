//convert the following for loop into while loop
let fname = "Jose Cruz";
let i = 0;

while (i < fname.length) {
  let c = 2 + i;
  let nLengthCounterTwo = fname.length - c;
  console.log(fname);
  console.log("Iterations Name was Printed: " + i);
  i++;
}

//code snippet 
let registeredUname = prompt("Register your Username"); 
let registeredPword = prompt("Register your passcode");
let reEnteredPword = prompt("Re-enter your passcode");

if (registeredPword === reEnteredPword) {
  alert("Congratulations! You have successfully registered.");

  let loginUname = prompt("Username: ");
  if (loginUname === registeredUname) {
    let loginPword = prompt("Password: ");
    (loginPword === registeredPword)
      ? alert("Welcome to DSA, " + registeredUname)
      : alert("Incorrect Password, Re-run the code!");
  } else {
    alert("Incorrect Username, Re-run the code!");
  }
} else {
  alert("Password does not Match, Re-run the code!");
}

//coding problem
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");

if (course === "BSCS" || course === "BSM" || course === "BAEL") {
  if (classRole === "Officer") {
    for (let i = 0; i < age / 4; i++) {
      console.log("Name: " + name);
    }
  } else if (classRole === "Student") {
    for (let i = 0; i < age / 4; i++) {
      console.log("Name: " + name);
    }
  } else if (classRole === "Teacher") {
    for (let i = 0; i < age / 4; i++) {
      console.log("Name: " + name);
    }
  } else {
    console.log("Invalid class role. Defaulting...");
    for (let i = 0; i < age / 4; i++) {
      console.log("Name: " + name);
    }
  }
} else {
  console.log("Invalid Course Selected.");
}