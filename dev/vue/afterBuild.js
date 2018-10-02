var ncp = require("ncp");
// "postbuild": "cp src/index.html ./dist/index.html && cp test/multitab.html ./dist/multitab.html",
ncp("src/index.html", "dist/index.html", callback);
ncp("test/multitab.html", "dist/multitab.html", callback);
function callback(){} //empty function, I don't need it for the start