const path = require('path')
console.log("The directory name is:", path.dirname(__filename));
console.log("The filename path is:", path.basename(__filename));
console.log("The extension of given file is:", path.extname(__filename));
const joinPath = path.join('Sunil', 'Kumar', 'Reddy')
console.log("The Joinpath is", joinPath);
const normalPath = 'C:/Users//Sunil/../Documents/example.txt'
console.log("The normal path:", path.normalize(normalPath));
const resolvePath = 'C:/Users//Sunil/../Documents/example.txt'
console.log("The resolvepathis :", path.resolve(resolvePath));






