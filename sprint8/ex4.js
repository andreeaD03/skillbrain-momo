function getVocals(string) {
    let vocals = "AaEeIiOoUu";
    let vocalsNr = 0;
    for (let i = 0; i < string.length; i++){
        if (vocals.indexOf(string[i]) !== -1) {
            vocalsNr += 1;
        }
    }
    return vocalsNr;
}

console.log("propozitia: Ana are mere are numarul de: " + getVocals("Ana are mere") + " vocale")
