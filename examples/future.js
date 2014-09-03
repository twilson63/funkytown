var _ = require('../');
var fs = require('fs');

function read(path) {
  return new _.Future(function(reject, resolve) {
    fs.readFile(path, function(err, data) {
      if (err) { return reject(err); }
      resolve(data);
    })
  });
}

var foo = read(__dirname + '/../index.js');
foo.fork(function(err) { console.log(err); }, function(data) { console.log(data.toString()) });

