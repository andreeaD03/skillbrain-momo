// ex1
for (let i = 0; i <= 10; i= i+2){
    console.log(i)
}

// ex2
let mynumbers = [1, 3, 5, 9]
let sum = 0
for (let i = 0; i < mynumbers.length; i++){
    sum += mynumbers[i]
}

console.log(sum)

// ex3
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
myNumbers.reverse()
console.log(myNumbers)

// ex4
function veziVocale(string) {
    let vocale = "AaEeIiOoUu";
    let nrVocale = 0;
    for (let i = 0; i < string.lenght; i++){
        if (vocale.indexOf(string[i]) !== -1) {
            nrVocale += 1;
        }
    }
    return nrVocale;

}

console.log(
    "Ana are multe mere" + veziVocale("Ana are mere"))