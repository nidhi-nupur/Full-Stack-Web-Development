
const fs = require("fs");

/*  fs.writeFile("practice.txt", "Hello from NodeJS", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); */


fs.readFile('./practice.txt','utf8' , (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 