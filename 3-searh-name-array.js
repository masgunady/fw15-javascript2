function displayLimitName(querySearch, limitSearch, display) {
    const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];
    const searchName = name.filter(x => x.toLowerCase().includes(querySearch));
    const displayLimit = searchName.filter((x, y) => y < limitSearch);
    display(displayLimit);
}

function show(showData) {
    console.log(showData);
}

displayLimitName("an", 3, show);