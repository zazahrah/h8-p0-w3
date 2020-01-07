function dataHandling(input) {
    let data = ""
    for(i=0; i<input.length; i++) {
        for(j=0; j<input[i].length; j++) {
            if(j === 0) {
                data += "Nomor ID: " + input[i][j] + "\n"
            }
            else if(j === 1) {
                data += "Nama Lengkap: " + input[i][j] + "\n"
            }
            else if(j === 2) {
                data += "TTL: " + input[i][j] + " " + input[i][j+1] + "\n"
                // (`${input[i][j]}${" "}${input[i][j+1]}${"\n"}`)
            }
            else if(j === input[i].length-1) {
                data += "Hobi: " + input[i][j] + "\n\n"
            }
        }
    }
    return data
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun