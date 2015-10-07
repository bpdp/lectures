var fs = require('fs');

fs.readFile(__dirname + '/person.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    console.log("Nama = " + jsonObj.firstName + " " + jsonObj.lastName);
    console.log("Usia = " + jsonObj.age);
    if (jsonObj.isAlive) {
        console.log("Masih hidup");
    } else {
        console.log("Sudah meninggal");
    }
    if (jsonObj.spouse == null) {
        console.log("Belum menikah");
    } else {
        console.log("Sudah menikah dengan " + jsonObj.spouse);
    }
    console.log("Jumlah anak = " + jsonObj.children.length);
    var jmlTelpon = jsonObj.phoneNumbers.length;
    for (var i = 0; i < jmlTelpon; i++) {
        var z = i+1;
        console.log('Tipe: ' + jsonObj.phoneNumbers[i].type);
        console.log('Nomor: ' + jsonObj.phoneNumbers[i].number);
    }
});
