require('./app/index');

// const numbers = [1, 2, 3, 4, 5];
//
// function isBiggerThanTwo(num) {
//     return num > 2;
// }
//
// numbers.filter(isBiggerThanTwo);

// numbers.filter(num => num > 2);

// Reading a file synchonously
const fs = require('fs');

// let content;
//
// try {
//     content = fs.readFileSync('file.md', 'utf-8');
// } catch (ex) {
//     console.log(ex);
// }
// console.log(content);

// Reading a file Asynchonously
console.log('start reading a file....');
fs.readFile('file.md', 'utf-8', function(err, content){
  if(err){
     console.log('Error happend during the reading of the file');
     return console.log(err);
  }
    console.log(content);
});
console.log('End reading file');


function stats(file){
  return new Promise((resolve, reject)=>{
    fs.stat(file, (err, data)=>{
      if(err){
        return reject(err);
      }
      resolve(data);
    })
  })
}

Promise.all([
  stats('file1'),
  stats('file2'),
  stats('file3')
]);

.then((data) => console.log(data));
.catch((err) => console.log(err));
