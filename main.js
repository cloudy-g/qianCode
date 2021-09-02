let {
  get_3D
} = require('./controller/three_D');
// 三维
let {
  p
} = require('./db/read3Data');

{
  let res1;
  p.then(res => {
    res1 = get_3D(res.ans, res.edge, res.start);
    //writeData(res1[1]);
    console.log('succeed')
  })
}

// 测试三维
/*
{
	let res;
let data = [];
let edge = [60, 150, 30];
// ans.push({
//   x: res.x[i],
//   y: res.y[i],
//   z: res.z[i]
// })
for (let j = 0; j < 150; j+=3) {
  for (let k = 0; k < 30; k+=3) {
    data.push({
      x: 30,
      y: j,
      z: k
    })
  }
}
res = get_3D(data, edge);
console.log(res);
}
*/