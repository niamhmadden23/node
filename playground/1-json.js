const fs = require('fs');


// const book = {
//     title: 'Wolf Hall',
//     author: 'Hilary Mantel',
//     releaseDate: '2009'
// }




// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON)
// console.log(bookJSON);


// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);


// // stored our data in binary
// const dataBuffer = fs.readFileSync('1-json.json')
// // converted to string
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON);
// // parsed data into Object 
// const data = JSON.parse(dataJSON);
// //accessed property from the object 
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json');
const personJSON = dataBuffer.toString();
const person = JSON.parse(personJSON);
person.name = 'Niamh'
person.age = 24
console.log(person)

const newData = JSON.stringify(person);
fs.writeFileSync('1-json.json', newData)
console.log(newData);



