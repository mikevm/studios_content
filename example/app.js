/******

This file is used by webpack to bundle up all of the content from your index.hbs file.
NOTE: if you move/change the name of the the index.hbs file or the data.json file, you MUST change the file/path here

******/
var mainTemplate = require("./index.hbs")
var data = require("./data.json")
console.log(mainTemplate(data));
