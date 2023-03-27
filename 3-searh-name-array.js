function displayLimitName(querySearch, limitSearch, callback) {
    const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
    const searchName = name.filter(x => x.toLowerCase().includes(querySearch));
    const displayLimit = searchName.filter((x, y) => y < limitSearch);
    callback(displayLimit);
}

function show(showData) {
    console.log(showData);
}

displayLimitName("an", 3, show);

//code dengan pencarian match

// function displayLimitName(querySearch, limitSearch, callback) {
//     const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
//     const searchName = name.filter(x => x.toLowerCase().match(querySearch));
//     const displayLimit = searchName.filter((x, y) => y < limitSearch);
//     callback(displayLimit);
// }

// function show(showData) {
//     console.log(showData);
// }

// displayLimitName("an", 3, show);


// code with regular expression

// function displayLimitName(querySearch, limitSearch, callback) {
//     const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
//     let queryRegExp = new RegExp(querySearch, "ig");

//     const searchName = name.filter(x => x.match(queryRegExp));
//     const displayLimit = searchName.filter((x, y) => y < limitSearch);
//     callback(displayLimit);
// }

// function show(showData) {
//     console.log(showData);
// }

// displayLimitName("an", 3, show);