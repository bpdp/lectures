var fs = require('fs'),
    xml2js = require('xml2js'),
    jsonQuery = require('json-query');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/employees.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.log(result);
        console.log('Pemilik perusahaan = ' + result.business.owner);
        var jmlKaryawan = result.business.employee.length;
        console.log('Jumlah karyawan = ' + jmlKaryawan);
        console.log('Karyawan 1 = ' + result.business.employee[0].firstname);
        console.log('Karyawan 2 = ' + result.business.employee[1].firstname);
        for (var i = 0; i < jmlKaryawan; i++) {
            var z = i+1;
            console.log('Karyawan ' + z);
            console.log('   Firstname = ' + result.business.employee[i].firstname);
            console.log('   Lastname = ' + result.business.employee[i].lastname);
            console.log('   Origin = ' + result.business.employee[i].origin);
        }
    });
});
