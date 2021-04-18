// Using the https module
const https = require('https');

// Using the file system module
const fs = require('fs');

// Link to the JSON placeholder API
let url = 'https://jsonplaceholder.typicode.com/posts';

// Getting JSON from the API
https.get(url, res =>{
    let body = '';

    res.on('data', data =>{
        body += data;
    })

    res.on('end', () => {
        // Writing JSON into a new file
        fs.writeFile('result/posts.json', body, (err) =>{
            if (err) throw err;
        })

        console.log('File Created');
    });
});