
var mockery = require('mockery');
var assert = require('assert');

//***********************************/
//**********  MOCK Preparing ********/
//***********************************/
var fsMock = {
    readFile: function (filename, callback) {
           if (filename === 'error') {
               callback(
                   new Error('error reading file: ' + filename)
               );
           } else {
               callback(null, 'file content: hello!');
           }
       }
   };

mockery.enable();
//replace fs with our fsMock
mockery.registerMock('fs', fsMock);
//explicitly telling mockery using the actual fsclient is OK
//without registerAllowable, you will see WARNING in test output
mockery.registerAllowable('./fsclient');
//***********************************/
//***********************************/
//***********************************/

client = require('./fsclient');
client.getFileContent('error', function (err, content) {
    assert.equal(err instanceof Error, true);
    console.log('Test: throw Error passed')
});