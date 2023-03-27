let data = {
    id: 1,
    name: 'Leanne Graham',
    usernam: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
}

let dataNew = {
    ...data
};

dataNew.name = 'Gunadi Pratama Sulistiawan';
dataNew.email = 'gunadips@gmail.com';
dataNew.hobby = ['run', 'swimming', 'football']

console.log(dataNew);
console.log(data)


console.log("Get data street and city :");
const {
    address: {
        street,
        city
    }
} = dataNew;

console.log(`Street: ${street}`);
console.log(`City: ${city}`);