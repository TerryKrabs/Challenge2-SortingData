let DI = document.getElementById('DI')
let firstN = document.getElementById('firstN') 
let lastN = document.getElementById('lastN')
let email = document.getElementById('email')
let age = document.getElementById('age')
let height = document.getElementById('height')

let sortTen = document.getElementById('sortTen')
let sortTwenty = document.getElementById('sortTwenty')
let sortThirty = document.getElementById('sortThirty')
let sortForty = document.getElementById('sortForty')
let sortFifty = document.getElementById('sortFifty')

let sortID = document.getElementById('sortID')
let sortFirst = document.getElementById('sortFirst')
let sortLast = document.getElementById('sortLast')
let sortEmail= document.getElementById('sortEmail')
let sortAge = document.getElementById('sortAge')
let sortHeight = document.getElementById('sortHeight')

// import data from '../data/data.json';

// const getData = async () => {
//     const promise = await fetch('../data/data.json');
//     const data =  await promise.text();
//     const peopleData = data.People;

//     return peopleData;
// }



async function getData(){
    const promise = await fetch('../data/data.json');
    const data =  await promise.text();
    const peopleData = data.People;
    console.log(data)
    return peopleData;
}

getData();



