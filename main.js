
const node = a(4).pop()

var chart_config = {
  chart: {
    container: '#tree-simple',
  },

  nodeStructure: node
};


function a(num, n = 1) {
  let arr = []; 
  if(n <= num) {   
    for (var i =1; i<=n; i++) {
      arr.push({ text: { name: n }, children: a(num, n + 1) });
    }
    return arr;
  } else {
    return
  }
}
