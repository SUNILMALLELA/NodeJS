
const fs = require('fs')
const createFolder = 'Example';
if (!fs.existsSync(createFolder)) {
    fs.mkdirSync(createFolder);
    console.log("Folder is created")
}
else {
    console.log("folder already exist");

}