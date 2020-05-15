var chart_config = {
  chart: {
    container: '#tree-simple',
  },

  nodeStructure: {
    text: { name: "1" },
    children: a(4)
  },
};


function a(num, n = 2) {
  let arr = [];
  let fact = 1
  let count = 0
  if(n <= num) {
    // return;
    for (var i =1; i<=n; i++) {
      // fact *= i
      count++
      arr.push({ text: { name: n }, children: a(num, n + 1) });
      
    }
    // console.log(arr);
    return arr;
  } else {
    return
  }
}

// // console.log(a(3));
// function b(n) {
//   let arr = []
//    for (var i = n; i >= 0; i--) {
//      arr.push({ text: { name: i }, children: `${a(n-1)}` });
//      a(n)
//    }
//   return arr
// }
// console.log(b(3));