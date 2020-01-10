function targetTerdekat(arr) {
    // you can only write your code here!
    let tampung = []
    let tampungLagi = []
    for(i=0; i<arr.length; i++) {
        if(arr[i] === 'o') {
            var positionO = i
        }
        if(arr[i] === 'x') {
            var positionX = i
            tampung.push(positionX)
        }
    }
    for(j=0; j<tampung.length; j++) {
        if(positionO < positionX) {
            tampungLagi.push(tampung[j] - positionO)
        }
        else if(positionO > positionX) {
            tampungLagi.push(positionO - tampung[j])
        }
    }
    if(tampungLagi.length === 0) {
        return 0
    }
    return Math.min(...tampungLagi)
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2