var fs = require('fs');
 
function getDate() {
    var today = new Date();
    return today.toUTCString();
}
 
function getFileContent(filename, callback) {
    fs.readFile(filename, function (err, content) {
        if (err) {
            callback(err);
        } else {
            callback(null, getDate() + "\n" + content);
        }
    });
}

module.exports.getFileContent = getFileContent;
