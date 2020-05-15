var chart_config = {
  chart: {
    container: '#tree-simple',
  },

  nodeStructure: {
    text: { name: '4' },
    children: a(4)
  },
};


function a(n) {
  let arr = [];
  let count = 0
  for (var i = n - 1; i >= 0; i--) {
    count++
    arr.push({ text: { name: n*n  } , children:a(n-1) });
  }
  return arr;
}

// // console.log(a(3));
// function b(n) {
//   let arr = []
//    for (var i = 0; i <= n; i++) {
//      arr.push({ text: { name: i }, children: `${a(n-1)}` });
//      a(n)
//    }
//   return arr
// }
// console.log(b(3));