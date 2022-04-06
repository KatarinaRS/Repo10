//Only change code below this line
var myPet = {
    species: "cat",
    name: "Bibi",
    legs: 4,
    friends: ["Zoni", "Lina"] 
}

function myFunction(myObj) {
    return myObj; 
}
//Only change code above this line
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };