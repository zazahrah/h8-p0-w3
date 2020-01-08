function pasanganTerbesar(num) {
    // you can only write your code here!
    var toString = num.toString()
    var newArr = []
    for(i=0; i<toString.length-1; i++) {
        newArr.push(toString[i]+toString[i + 1])
    }
    newArr.sort(function (a,b) { return b -a})
    return Number(newArr[0])
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99