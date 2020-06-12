/*
* printtig the two line from the
* command like argument
* it had to be sequential
*
* */
console.log(process.argv);

// first two is the node path
// and the file path
console.log("My Name Is ",process.argv[2]);
console.log("My Id is ",process.argv[3]);
console.log("My Department Is ",process.argv[4]);

/*
* run the program in kuje that
* node -p main.js Tanvir 143000410 EEE
* */