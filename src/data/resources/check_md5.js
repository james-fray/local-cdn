'use strict';

var crypto = require('crypto');
var fs = require('fs');
const https = require('https');

var checksum = (str, algorithm, encoding) => crypto.createHash(algorithm || 'md5')
  .update(str, 'utf8').digest(encoding || 'hex');

var md5 = {
  file: path => {
    return new Promise(resolve => {
      fs.readFile(path, (err, data) => {
        resolve(err ? err : {
          md5: checksum(data)
        });
      });
    });
  },
  web: url => {
    // fixes for prototype
    url = url.replace('prototype/1.6.1.0', 'prototype/1.6.1');
    url = url.replace('prototype/1.7.2.0', 'prototype/1.7.2');
    url = url.replace('prototype/1.7.3.0', 'prototype/1.7.3');

    return new Promise(resolve => {
      https.get(url, (res) => {
        let data = [];
        res.on('data', (chunk) => data.push(chunk));
        res.on('end', () => {
          if (res.statusCode === 200) {
            let buffer = Buffer.concat(data);
            resolve({
              buffer,
              md5: checksum(buffer)
            });
          }
          else {
            resolve({error: 'library not found!'});
          }
        });
      }).on('error', (e) => resolve({error: e}));
    });
  }
};

function check (path) {
  return Promise.all([
    md5.file(path + '.dec'),
    md5.web('https://ajax.googleapis.com/ajax/libs/' + path),
    md5.web('https://cdnjs.cloudflare.com/ajax/libs/' + path),
  ]).then(a => {
    if (a[0].md5 === a[1].md5 || a[0].md5 === a[2].md5) {
      console.log('OK', path, a[0].md5);
    }
    else {
      console.log('\x1b[31m%s\x1b[0m', 'MD5 does not match or resource cannot be found', path);
      // rewrite if found and MD5 does not match
      /*
      if (a[1].md5) {
        fs.writeFile(path + '.dec', a[1].data, () => path + ' is fixed!');
      }
      else if (a[2].md5) {
        fs.writeFile(path + '.dec', a[2].data, () => path + ' is fixed!');
      }
      */
    }
  });
}

function getFiles (dir, files_ = []) {
  let files = fs.readdirSync(dir);
  for (let i in files) {
    let name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    }
    else {
      files_.push(name);
    }
  }
  return files_;
}

// get all libs
var files = getFiles('.').filter(n => n.endsWith('.dec')).map(n => n.replace('./', '').replace('.dec', ''));
// check md5
function next () {
  let file = files.shift();
  if (file) {
    check(file).then(next);
  }
  else {
    console.log('done!');
  }
}
next();
