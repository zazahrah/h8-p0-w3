var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]


function dataHandling2(input) {
    input.splice(1, 1 ,"Roman Alamsyah Elsharawy");
    input.splice(2, 1 , "Provinsi Bandar Lampung");
    input.splice(-1 , 1);
    input.splice(input.length, 0, "Pria", "SMA Internasional Metro");
    console.log(input)

    var date = input[3].split("/")
    switch(date[01]) {
        case '01' :
            month = "Januari"
            break;
        case '02' :
            month = "Februari"
            break;
        case '03' :
            month = "Maret"
            break;
        case '04' :
            month = "April"
            break;
        case '05' :
            month = "Mei"
            break;
        case '06' :
            month = "Juni"
            break;
        case '07' :
            month = "Juli"
            break;
        case '08' :
            month = "Agustus"
            break;
        case '09' :
            month = "September"
            break;
        case '10' :
            month = "Oktober"
            break;
        case '11' :
            month = "November"
            break;
        case '12' :
            month = "Desember"
            break;
    }
    console.log(month)

    var dateSort = date.sort((a, b) => b - a)
    console.log(dateSort)
    
    var joinDate = input[3].split("/").join("-")
    console.log(joinDate)

    var name = String(input[1]).slice(0,15)
    console.log(name)
}





dataHandling2(input)