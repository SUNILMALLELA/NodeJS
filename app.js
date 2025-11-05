const path = require('path')
console.log("The dir name is ", path.dirname(__filename));
console.log("The file name is", path.basename(__filename));
console.log("The extension of file is", path.extname(__filename));
const joinPath = path.join("/Sunil", "Kumar", "Reddy", "Mallela")
console.log(joinPath);
const result = path.resolve('folder1', 'folder2', 'file.txt');
console.log(result);
const messyPath = 'folder1//subfolder/../file.txt';
const cleanPath = path.normalize(messyPath);
console.log(cleanPath);







