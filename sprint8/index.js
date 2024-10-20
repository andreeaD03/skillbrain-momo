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

// ex3

const biblioteca = [
    {
        carte1: "romana",
        autor: "autorRomana",
        esteCitita: true,
    },

    {
        carte2: "mate",
        autor: "autorMate",
        esteCitita: false,
    },

];

     for (let i = 0; i < biblioteca.length; i++) {

    if ( biblioteca.esteCitita === true ) {
        console.log("cartea " + biblioteca[0].carte1 + " este citita");
        
    } else  { 
        console.log("cartea " + biblioteca[1].carte2 + " nu este citita")
    }
    
}

// am facut tot ce am putut 