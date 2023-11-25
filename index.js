let beers = ["victoria", "corona", "estrella"];
let wines = ["chardonnay", "merlot", "cabernet"];
// mutable
beers.push("heineken");
beers.unshift("modelo especial");
beers.splice(2, 0, "fullers");

let b = beers.pop();
let b2 = beers.shift();
// console.log(b);
// console.log(b2);

showDom("array1",beers);

// inmutable
const alcoholicDrinks = beers.concat(wines);
alcoholicDrinks.push("roja");

showDom("array2", alcoholicDrinks);

function show (arr){
    for(let i=0 ; i<arr.lenght ; i++){
        console.log(arr[i]);
    }    
}

function showDom (element, arr){
    document.getElementById(element).innerHTML =""; 
    
    for(let i=0 ; i<arr.lenght ; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}</div>`
    }  

}