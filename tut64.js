const fs = require("fs");
let reg = /uuu*/;
let text = fs.readFileSync("read.txt", "utf-8");
text = text.replace("I'm", "you are");
text = text.replace(reg, "meee");
fs.writeFileSync("write.txt",text);