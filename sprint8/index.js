// ex1
const retetaMea = {
    nume: "shakshuka",
    portii: 2,
    ingrediente : ["ceapa", "ardei", "rosii", "cascaval"],
}

console.log(retetaMea.nume)
console.log(retetaMea.portii)
console.log(retetaMea.ingrediente)

// ex 2
const rechizite = {
    carte: "rosu",
    caiet: "albastru",
}

rechizite.coperta = "galben"
delete rechizite.caiet

const keys = Object.keys(rechizite);


console.log(rechizite)

console.log(keys)