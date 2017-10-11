var fsClient = require('./fsClient');

fsClient.getFileContent('./fsClient.js', (err, data)=> {
    if(err)
        console.error(err)
    else
        console.log('success: ', data.length, ' words')
})