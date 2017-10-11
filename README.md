# mockery-must-know
It is a note about using mockery in test

# About `mockery`
```js
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
```


## Reference
 - [http://mwebhack.blogspot.com/2012/04/mockery-easy-mocking-in-nodejs.html](http://mwebhack.blogspot.com/2012/04/mockery-easy-mocking-in-nodejs.html)