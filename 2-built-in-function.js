console.log("No.1");
console.log("push() - Digunakan untuk memasukan index kedalam array");
const animals = ["sapi", "kambing", "kuda"];
const tryPushToAnimals = animals.push("Ikan");
console.log(animals);


console.log("No.2")
console.log("concat() - digunakan untuk menggabungkan dua atau lebih array")
const animals1 = ["sapi", "kambing", "kuda"];
const animals2 = ["Kucing", "Jangkrik", "ikan"];
const tryToConcatArray = animals1.concat(animals2);
console.log(tryToConcatArray);


console.log("No.3")
console.log("reverse() - digunakan untuk membalikan index array")
const number = [1, 2, 3, 4, 5];
console.log(number);
console.log(number.reverse());


console.log("No.4")
console.log("isNaN() - digunakan untuk mengecek suatu nilai/variable apakah number atau bukan")

function checkNumber(value) {
    if (isNaN(value)) {
        console.log(`${value} Not a number`)
        return;
    } else {
        console.log(`${value} is number`);
    }
}

checkNumber(6);

console.log("No.5")
console.log("parseInt() - digunakan untuk merubah type data misal dari string ke number")

let cekType = "12345";
let changeToInt = parseInt(cekType)
console.log(typeof (cekType));
console.log(typeof (changeToInt));



console.log("No.6")
console.log("typeof() - digunakan unuk mengecek type data dari suatu value");

const valueCheck = "200 Ribu";
console.log(typeof (valueCheck));


console.log("No.7 ")
console.log("toLowerCase() & toUpperCase - digunakan mengganti format string menjadi lowwercase (toLowerCase)/uppercase (toUpperCase)")
const stringValue = "Gunadi Pratama Sulistiawan";
console.log(stringValue.toLowerCase());
console.log(stringValue.toUpperCase());


console.log("No.8")
console.log("pop() - digunakan untuk menghapus index terakhir array dan mengembalikan nilai tersebut");
let tryPop = [1, 2, 3, 4, 5];
console.log(tryPop.pop());




console.log("No.9")
console.log("slice() - digunakan untuk mengekstrak array array")

let trySlice = [0, 1, 2, 3, 4, 5];
console.log(trySlice.slice(2, 4));

console.log("No.10")
console.log("replace() - digunakan mengganti value dari string dengan yang kita inginkan")

let replaceTeks = /burung/gi;
let teksOriginal = "Saya memelihara burung";
let teksRepace = teksOriginal.replace(replaceTeks, "Macan");
console.log(teksOriginal);
console.log(teksRepace);