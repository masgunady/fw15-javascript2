function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {

    if (nilaiAwal > nilaiAkhir) {
        console.log("Nilai awal harus lebih kecil dari nilai akhir");
        return;
    }
    if (dataArray.length <= 5) {
        // jika menggunakan <= 5 dan length arraynya 5 masih true sehingga dijalankan console error dibawah
        console.log("Data array harus lebih dari 5");
        return;
    }

    const dataFilter = dataArray.filter(element => element > nilaiAwal && element < nilaiAkhir);
    const dataSort = dataFilter.sort(function (a, b) {
        return a - b
    });

    if (dataSort.length <= 0) {
        console.log("Data tidak ditemukan");
    } else {

        console.log(dataSort);
    }
}

seleksiNilai(16, 18, [14, 17, 30, 8, 5]);