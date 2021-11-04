const request = require('request');
const fs = require('fs');

const fetcher = (url, path) => {
  request(url, (error, response, body) => {
    (error) ? console.log('error:', error) : null;
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err);
        return;
      }
      fileWritten(body);
    });
  });
};

const calcBytes = data => {
  let size = data.length;
  return size;
};

const fileWritten = (data) => {
  let size = calcBytes(data);
  console.log(`Downloaded and saved ${size} bytes to ${path}`);
};

const inputs = process.argv.slice(2);
let url = inputs[0];
let path = inputs[1];
fetcher(url, path);