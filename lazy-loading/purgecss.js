const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');

// find the styles css file
const files = getFilesFromPath('./dist/lazy-loading', '.css');
let data = [];
console.log(files);

if (!files && files.length <= 0) {
  console.log("cannot find style files to purge");
  return;
}

for (let f of files) {
    // get original file size
    const originalSize = getFilesizeInKiloBytes('./dist/lazy-loading/' + f) + "kb";
    var o = { "file": f, "originalSize": originalSize, "newSize": "" };
    data.push(o);
  }
  

console.log("Run PurgeCSS...");

cmd = "purgecss --css ./dist/lazy-loading/"+files[0]+" --content ./dist/lazy-loading/index.html ./dist/lazy-loading/*.js --output ./dist/lazy-loading/"+files[0];
exec(cmd, function (error, stdout, stderr) {
  console.log("PurgeCSS done");
  for (let d of data) {
    // get new file size
    const newSize = getFilesizeInKiloBytes('./dist/lazy-loading/' + d.file) + "kb";
    d.newSize = newSize;
  }
  console.table(data);
});

function getFilesizeInKiloBytes(filename) {
    var stats = fs.statSync(filename);
    var fileSizeInBytes = stats.size / 1024;
    return fileSizeInBytes.toFixed(2);
}

function getFilesFromPath(dir, extension) {
  let files = fs.readdirSync(dir);
  return files.filter(e => path.extname(e).toLowerCase() === extension);
}