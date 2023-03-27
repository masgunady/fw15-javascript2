const searchNum = (nilaiAwal, nilaiAkhir, dataArray) => {
    let hasil = [];
    if (typeof nilaiAwal === "number" && typeof nilaiAkhir === "number") {
        if (dataArray.length < 5) {
            console.log("Jumlah angka dalam data Array harus lebih dari 5");
        } else if (nilaiAwal > nilaiAkhir) {
            console.log("nilai Awal harus lebih kecil dari pada nilai Akhir");
        } else {
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
                    dataSatuan = dataArray[i];
                    hasil = hasil+dataSatuan
                    
                }
            }

            // console.log(typeof hasil)
            hasil = [...hasil]
            hasil = hasil.map(function(toInteger){
                return parseInt(toInteger)
            })
            // return
            if (hasil.length) {
                console.log(hasil.sort());
            } else {
                console.log("Data tidak ditemukan");
            }
        }
    }
};

searchNum(2, 10, [7, 4, 11, 9, 12]);
