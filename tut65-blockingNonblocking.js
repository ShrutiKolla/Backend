const fs = require("fs");

fs.readFile("read.txt", "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log("the content of file: ");
        console.log(data);
    }
})
console.log("the last line....\n")