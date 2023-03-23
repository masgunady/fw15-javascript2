function displayLimitName(querySearch, limitSearch, display) {
    const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
    let queryRegExp = new RegExp(querySearch, "ig");
    const searchName = name.filter(x => x.match(queryRegExp));
    const displayLimit = searchName.filter((x, y) => y < limitSearch);
    display(displayLimit);
}

function callback(showData) {
    console.log(showData);
}

displayLimitName("an", 3, callback);