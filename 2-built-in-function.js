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