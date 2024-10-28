// const ingrediente = [rosii, ceapa, ardei]

function getShashuka(title, portions, components) {
    const cookShashuka = "Numele retetei mele este " + title + "  petru un numar de  " + portions + " portii. Care are urmatoarele ingrediente " + components;
    return cookShashuka;
    // const ingrediente = [rosii, ceapa, ardei]

}

const retetaMea = getShashuka("Shashuka", 2, "rosii, ceapa, ardei")
console.log(retetaMea)

// am incercat in toate felurile sa folosesc un array dar nu ii dau de cap 