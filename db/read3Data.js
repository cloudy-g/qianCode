// 逐行读取数据
var fs = require("fs");
var path = require("path");
var readline = require("readline");
var {
  format
} = require('../methods/format_data');
let filesP = 'y_3_t1';

const readliner = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, `../data/source/${filesP}/sum.txt`)),
});

// const readliner1 = readline.createInterface({
//   input: fs.createReadStream(path.join(__dirname, `../data/source/${filesP}/y.txt`)),
// });

// const readliner2 = readline.createInterface({
//   input: fs.createReadStream(path.join(__dirname, `../data/source/${filesP}/z.txt`)),
// });

let res = [];
let ans = [];
console.log('start')
readliner.on('line', function (chunk1) {
  //处理每一行数据
  res.push(chunk1);
});
// readliner1.on('line', function (chunk1) {
//   //处理每一行数据
//   res.y.push(chunk1);
// });
// readliner2.on('line', function (chunk1) {
//   //处理每一行数据
//   res.z.push(chunk1);
// });

let p = new Promise(resolve => {
  readliner.on('close', function () {
    //文件读取结束
    //format(res.x);
    //format(res.y);
    //format(res.z);
    let edge = [];
    let start = [];
    edge[0] = Number.MIN_SAFE_INTEGER;
    edge[1] = Number.MIN_SAFE_INTEGER;
    edge[2] = Number.MIN_SAFE_INTEGER;
    start[0] = Number.MAX_SAFE_INTEGER;
    start[1] = Number.MAX_SAFE_INTEGER;
    start[2] = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < res.length; i++) {
      let tem = res[i].split(/ +/g);
      ans.push({
        x: tem[0],
        y: tem[1],
        z: tem[2]
      })
      edge[0] = Math.max(tem[0], edge[0]);
      edge[1] = Math.max(tem[1], edge[1]);
      edge[2] = Math.max(tem[2], edge[2]);
      start[0] = Math.min(tem[0], start[0]);
      start[1] = Math.min(tem[1], start[1]);
      start[2] = Math.min(tem[2], start[2]);
    }
    resolve({
      ans,
      edge,
      start
    });
  });
});
module.exports = {
  p
}