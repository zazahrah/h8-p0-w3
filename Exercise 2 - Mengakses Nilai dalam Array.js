function balikString(string) {
    var newString = ''
    for(i=string.length-1; i>=0; i--) {
        newString += string[i]
    }
    return newString
}

console.log(balikString("hello world!"))