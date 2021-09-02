let {
  deepCopy
} = require('../methods/deepCopy');

// data 存储数据的数组  [{x:...,y:...,z:...},{...}]
// edge 为岩块的尺寸，以三维平面图长宽高存储为一个数组 [l,w,h]
var get_3D = function (data, edge, start) {
  // 对数据进行整理
  data = data.map(v => {
    return {
      x: v.x,
      y: v.y,
      z: v.z
    }
  })

  // 对data进行排序，x从小到大,x相同的y从小到大
  data.sort((a, b) => {
    if ((a.x - b.x) == 0) {
      if ((a.y - b.y) == 0) {
        return a.z - b.z;
      }
      return a.y - b.y;
    }
    return a.x - b.x;
  })
  console.log(data.length);
  console.log(edge);
  console.log(start)
  // r初始值
  let r_x = 64,
    r_y = 64,
    r_z = 64;
  // 影响因子 q	
  let q = [1 / 2];
  /*let r = 30;*/
  // 初始参数
  let RTCorner, flag, copy, count,
    res = [];
  //  console.log(data);

  // 控制循环次数 0 - 9(不包括) 9 次 
  let end = 7;
  let times = end;
  let index = 0;
  while (times-- > 0) {
    flag = false;
    copy = data.concat();
    count = 0;
    r_x = Number(r_x.toFixed(3));
    r_y = Number(r_y.toFixed(3));
    r_z = Number(r_z.toFixed(3));

    // 三层循环
    for (let i = start[0]; i < edge[0]; i += r_x) {
      for (let j = start[1]; j < edge[1]; j += r_y) {
        for (let m = start[2]; m < edge[2]; m += r_z) {

          RTCorner = [i + r_x, j + r_y, m + r_z];

          for (let k = 0; k < copy.length;) {
            const element = copy[k];
            if (element.x <= RTCorner[0] && element.y <= RTCorner[1] && element.z <= RTCorner[2]) {
              copy.splice(k, 1);
              flag = true;
            } else if (element.x > RTCorner[0] && element.y > RTCorner[1] && element.z > RTCorner[2]) {
              break;
            } else {
              k++;
            }
          }
          if (flag) {
            count++;
            flag = false;
          }
        }
      }
    }
    console.log(q[index], r_x, r_y, r_z, count);
    res.push([q[index], r_x, r_y, r_z, count]);
    r_x *= q[index];
    r_y *= q[index];
    r_z *= q[index];
  }
  return [res, data];
}
function cal(){

}

module.exports = {
  get_3D
}