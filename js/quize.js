// 3
// how we can get 2nd element from person array using Slice()?

const person = [
    {
        name: "rahim",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim2",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim3",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
];

console.log(person.slice(1,2));




// 5 
const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];


console.log(dreamGirl[0].sokina.contactInfo[1]);


// 9
//    can you get the phone which price not 500 ? which one is correct?

const phones = [
    { name: "sony", price: 500 },
    { name: "apple", price: 700 },
    { name: "sony", price: 700 },
];

console.log(phones.filter((phone) => phone.price != 500));


// 10
// map(), forEach(),find(),filter() can only use for loop through the array not in Object. True or False?
//  ans: true

