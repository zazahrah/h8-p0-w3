function angkaPalindrome(num) {
    // you can only write your code here!
    var numsPal = num + 1
    let flag = false
    while (flag === false) {
        if (palindrome(numsPal.toString()) === true) {
            return numsPal
        } else {
            numsPal++
        }
    }
}


function palindrome(kata) {
  // you can only write your code here!
  let anotherKata = ''
  for(i=kata.length-1; i>=0; i--) {
    anotherKata += kata[i]
  }
  if(anotherKata == kata) {
    return true
  }
  else {
    return false
  }
}

  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001